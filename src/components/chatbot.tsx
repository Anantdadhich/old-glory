"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, User, ChevronLeft, ChevronRight } from "lucide-react";

// --- Types ---
interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

interface Message {
  role: "user" | "assistant";
  content?: string;
  type?: "text" | "card" | "welcome_card" | "booking_form" | "doctor_cards";
  text?: string;
  image?: string;
  doctors?: Doctor[];
  buttons?: Array<{ label: string; payload: string }>;
  fields?: Array<{
    id: string;
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
    pattern?: string;
  }>;
  submitButton?: string;
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

// Doctor Carousel Component
const DoctorCarousel = ({ doctors, onSelectDoctor }: { doctors: Doctor[], onSelectDoctor: (id: string, name: string) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  const currentDoctor = doctors[currentIndex];

  return (
    <div className="relative">
      <div 
        className="relative overflow-hidden rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl overflow-hidden">
          {/* Doctor Image */}
          <div className="relative h-52 bg-gradient-to-br from-[#1E4D58]/5 to-[#2A9D8F]/5">
            <img 
              src={currentDoctor.image} 
              alt={currentDoctor.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Doctor Info */}
          <div className="p-4">
            <h3 className="font-bold text-gray-900 text-base mb-1">{currentDoctor.name}</h3>
            <p className="text-xs text-[#1E4D58] font-medium mb-2">{currentDoctor.specialty}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{currentDoctor.bio}</p>
            
            <button
              onClick={() => onSelectDoctor(`ACTION_DETAILS_${currentDoctor.id}`, `Details: ${currentDoctor.name}`)}
              className="mt-3 w-full bg-[#1E4D58] hover:bg-[#163a42] text-white text-xs font-medium py-2 px-4 rounded-lg transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      {doctors.length > 1 && (
        <>
      
          <button
            onClick={handleNext}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="w-3 h-3" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {doctors.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {doctors.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIndex ? 'w-6 bg-[#1E4D58]' : 'w-1.5 bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingFormData, setBookingFormData] = useState<Record<string, string>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

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
          doctors: data.doctors,
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
        doctors: data.doctors,
        buttons: data.buttons,
        fields: data.fields,
        submitButton: data.submitButton,
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

  const handleOptionClick = (payload: string, label: string) => {
    if (payload.startsWith('http') || payload.startsWith('tel:')) {
      window.open(payload, '_blank');
      return;
    }
    handleSendMessage(label, true, payload);
  };

  const handleBookingSubmit = async (e: React.FormEvent, fields: any[]) => {
    e.preventDefault();
    
    const name = bookingFormData['name'];
    const phone = bookingFormData['phone'];

    if (!name || !phone) {
      alert('Please fill in all fields');
      return;
    }

    setMessages((prev) => [
      ...prev, 
      { role: "user", content: `Book appointment for ${name} (${phone})` }
    ]);

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    setMessages((prev) => [
      ...prev,
      { 
        role: "assistant", 
        content: `✅ Success! Thank you ${name}!\n\nWe've received your booking request. Our team will call you at ${phone} shortly to confirm your appointment.\n\nLooking forward to seeing you at Old Glory Dental! 😊`
      }
    ]);

    setBookingFormData({});
    setIsLoading(false);
    console.log('Booking submitted:', { name, phone });
  };

  const renderContent = (msg: Message) => {
    const textContent = msg.text || msg.content;

    return (
      <div className="flex flex-col gap-3 w-full">
        {msg.image && !msg.doctors && (
          <div className="relative w-full h-32 rounded-lg overflow-hidden mb-1 border border-slate-100">
            <img src={msg.image} alt="Visual" className="w-full h-full object-cover" />
          </div>
        )}
        
        <div className="whitespace-pre-wrap">{textContent}</div>

        {/* Doctor Carousel */}
        {msg.type === "doctor_cards" && msg.doctors && msg.doctors.length > 0 && (
          <div className="mt-2">
            <DoctorCarousel 
              doctors={msg.doctors} 
              onSelectDoctor={handleOptionClick}
            />
          </div>
        )}

        {/* Booking Form */}
        {msg.type === "booking_form" && msg.fields && (
          <form onSubmit={(e) => handleBookingSubmit(e, msg.fields!)} className="flex flex-col gap-3 mt-2">
            {msg.fields.map((field) => (
              <div key={field.id} className="flex flex-col gap-1">
                <label htmlFor={field.id} className="text-xs font-medium text-gray-700">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  pattern={field.pattern}
                  value={bookingFormData[field.id] || ''}
                  onChange={(e) => setBookingFormData(prev => ({
                    ...prev,
                    [field.id]: e.target.value
                  }))}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E4D58] focus:border-transparent"
                />
              </div>
            ))}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1E4D58] hover:bg-[#163a42] text-white font-medium py-2.5 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm mt-1"
            >
              {msg.submitButton || "Submit"}
            </button>
          </form>
        )}

        {/* Regular Buttons */}
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

        <div className="flex-1 bg-[#FDFBF7] p-4 overflow-y-auto flex flex-col gap-6 scrollbar-hide">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[85%] gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
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

      <div className={`transition-all duration-300 ${isOpen ? 'translate-y-4 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <a 
          href="https://wa.me/918875700500?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center"
        >
          <WhatsAppIcon />
        </a>
      </div>

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
        
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
        )}
      </button>
    </div>
  );
}
