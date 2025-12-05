"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, User, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
interface Message {
  role: "user" | "assistant";
  content?: string;
  type?: "text" | "card" | "welcome_card";
  text?: string;
  image?: string;
  buttons?: Array<{ label: string; payload: string }>;
}

// --- Icons ---
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const TypingIndicator = () => (
  <div className="flex w-full justify-start">
    <div className="flex max-w-[85%] gap-2 flex-row">
      <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border bg-white border-gray-200">
         <img src="/logo.png" className="w-full h-full object-contain p-1" alt="Bot" />
      </div>
      <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1.5 items-center">
        <span className="w-1.5 h-1.5 bg-[#1E4D58] rounded-full animate-bounce"></span>
        <span className="w-1.5 h-1.5 bg-[#1E4D58] rounded-full animate-bounce delay-100"></span>
        <span className="w-1.5 h-1.5 bg-[#1E4D58] rounded-full animate-bounce delay-200"></span>
      </div>
    </div>
  </div>
);

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  // --- 1. Auto-Open & Initialize Chat ---
  useEffect(() => {
    const initChat = async () => {
      if (hasInitialized.current) return;
      hasInitialized.current = true;

      setIsLoading(true);
      try {
        const response = await fetch(`/api/ask`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: "INIT_CHAT", history: [] }),
        });
        
        const data = await response.json();
        
        const welcomeMsg: Message = {
          role: "assistant",
          type: data.type || "welcome_card",
          text: data.text || "Hello! How can I help you?",
          image: data.image,
          buttons: data.buttons,
          content: data.text 
        };
        setMessages([welcomeMsg]);
      } catch (err) {
        console.error("Failed to init chat", err);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      setIsOpen(true);
      initChat();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  // --- 2. Handle Sending Messages ---
  const handleSendMessage = async (text: string, isUser: boolean = true, payload?: string) => {
    if (!text.trim() && !payload) return;

    if (isUser) {
      setInput("");
      setMessages((prev) => [...prev, { role: "user", content: text }]);
    }

    setIsLoading(true);

    try {
      const history = messages.map(m => ({ 
        role: m.role, 
        content: m.content || m.text || "" 
      }));

      const messageToSend = payload || text;

      const response = await fetch(`/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: messageToSend, 
          history: history,
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        type: data.type || "text",
        text: data.text || data.answer || "Sorry, I couldn't get a response.",
        image: data.image,
        buttons: data.buttons,
        content: data.text || data.answer
      };
      
      setMessages((prev) => [...prev, assistantMessage]);

    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    handleSendMessage(input);
  };

  // --- 3. Handle Button Clicks ---
  const handleOptionClick = (payload: string, label: string) => {
    if (payload.startsWith('http') || payload.startsWith('tel:')) {
      window.open(payload, '_blank');
      return;
    }
    handleSendMessage(label, true, payload);
  };

  // --- 4. Render Message Content ---
  const renderContent = (msg: Message) => {
    const textContent = msg.text || msg.content;

    return (
      <div className="flex flex-col gap-3 w-full">
        {msg.image && (
          <div className="relative w-full h-32 rounded-lg overflow-hidden mb-1 border border-slate-100">
             <img src={msg.image} alt="Visual" className="w-full h-full object-cover" />
          </div>
        )}
        
        <div className="whitespace-pre-wrap">{textContent}</div>

        {/* Buttons - Same Style as Inspiration */}
        {msg.buttons && msg.buttons.length > 0 && (
           <div className="flex flex-wrap gap-2 mt-1">
             {msg.buttons.map((btn, idx) => (
               <button
                 key={idx}
                 onClick={() => handleOptionClick(btn.payload, btn.label)}
                 className="text-xs border border-gray-300 text-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors active:scale-95"
               >
                 {btn.label}
               </button>
             ))}
           </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans">
      
      {/* --- Chat Window --- */}
      <div 
        className={`
          origin-bottom-right transition-all duration-300 ease-in-out
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none hidden'}
          absolute bottom-20 right-0
          w-[calc(100vw-48px)] md:w-[380px]
          bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col 
          max-h-[85vh] h-[600px]
        `}
      >
        
        {/* Header - Old Glory Green */}
        <div className="bg-[#1E4D58] p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white overflow-hidden backdrop-blur-sm border border-white/10">
                 <img src="/logo.png" alt="" className="w-full h-full object-contain p-1.5" />
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1E4D58] rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Old Glory Dental</h3>
              <p className="text-white/70 text-[11px]">Online • Replies instantly</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 bg-[#FDFBF7] p-4 overflow-y-auto flex flex-col gap-6 scrollbar-hide">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[85%] gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Avatar */}
                  <div className={`
                    w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border
                    ${msg.role === 'user' ? 'bg-[#1E4D58] border-[#1E4D58] text-white' : 'bg-white border-gray-200'}
                  `}>
                      {msg.role === 'user' ? (
                         <User size={14} />
                      ) : (
                         <img src="/logo.png" className="w-full h-full object-contain p-1" alt="Bot" />
                      )}
                  </div>

                  {/* Message Bubble */}
                  <div className="flex flex-col gap-1">
                      <div className={`
                          p-3.5 shadow-sm text-sm leading-relaxed
                          ${msg.role === 'user' 
                            ? 'bg-[#1E4D58] text-white rounded-2xl rounded-tr-none' 
                            : 'bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-tl-none'
                          }
                      `}>
                        {renderContent(msg)}
                      </div>
                      <span className={`text-[10px] text-gray-400 ${msg.role === 'user' ? 'text-right' : 'text-left ml-1'}`}>
                        {msg.role === 'user' ? 'You' : 'Old Glory Assistant'}
                      </span>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-100 shrink-0">
          <div className="p-3">
            <form 
              className="relative flex items-center gap-2"
              onSubmit={handleSubmit}
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..." 
                disabled={isLoading}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full pl-4 pr-4 py-3 text-base md:text-sm focus:outline-none focus:border-[#1E4D58] focus:ring-0 transition-colors disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-11 h-11 flex items-center justify-center bg-[#1E4D58] rounded-full text-white hover:bg-[#163a42] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-sm"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </div>
          
          <div className="pb-2 text-center">
            <a 
              href="https://comacks.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors"
            >
              Powered by <span className="font-semibold text-gray-500">Comacks</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- WhatsApp Button (Floating) --- */}
      <div className={`transition-all duration-300 ${isOpen ? 'translate-y-4 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <a 
          href="https://wa.me/917678245349?text=Hi%2C%20I%20want%20details%20about%20${opt.title}%20🙂"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#1d5343] hover:bg-[#153e32] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center"
        >
          <WhatsAppIcon />
        </a>
      </div>

      {/* --- Main Toggle Button --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#1E4D58] hover:bg-[#163a42] text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all hover:scale-105 flex items-center justify-center z-[100] relative"
      >
        <div className={`transition-all duration-300 absolute ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
           <MessageSquare className="w-7 h-7" />
        </div>
        <div className={`transition-all duration-300 absolute ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
           <X className="w-7 h-7" />
        </div>
        
        {/* Notification Dot */}
        {!isOpen && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
        )}
      </button>

    </div>
  );
}