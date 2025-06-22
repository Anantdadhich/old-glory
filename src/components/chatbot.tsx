"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { FaTeeth, FaTooth } from "react-icons/fa";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const TypingIndicator = () => (
  <div className="mb-4 flex justify-start animate-in slide-in-from-bottom-2 duration-300">
    <div className="px-4 py-3 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-lg flex space-x-2 items-center">
      <div className="flex space-x-1">
        <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
        <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce delay-100" />
        <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce delay-200" />
      </div>
      <span className="text-xs text-gray-500 ml-2">Thinking...</span>
    </div>
  </div>
);

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("[data-chatbot-toggle]")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        data-chatbot-toggle
        className="fixed bottom-4 right-4 z-50 rounded-full w-14 h-14 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 shadow-lg text-white text-xl flex items-center justify-center hover:cursor-pointer"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : "💬"}
      </Button>

      <div
        className={`fixed bottom-20 right-4 w-[95%] sm:w-[90]%] md:max-w-md lg:w-96 h-[72vh] z-40 transition-all duration-500 ease-out transform ${
          isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div
          ref={chatbotRef}
          className="h-full bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-4 border-b border-blue-100/50 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm flex justify-between items-center rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <FaTooth className="text-blue-600"/>
              <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Old Glory Assistant
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full hover:bg-white/50 transition-all duration-200 flex items-center justify-center group"
            >
              <X size={18} className="text-gray-600 group-hover:text-gray-800 hover:cursor-pointer" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-4 py-6 overflow-y-auto">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-10 text-sm animate-in fade-in-50 duration-1000 flex flex-col items-center justify-center gap-4">
                <div className="p-5 bg-blue-50 rounded-full shadow-lg animate-in zoom-in-75">
                  <Bot size={40} className="text-blue-600" />
                </div>
                <p className="text-md">Whether it’s your first visit or a follow-up, I’m here to help you feel confident and informed every step of the way.</p>
              </div>
            )}

            {messages.map((message, index) => (
              <div 
                key={index}
                className={`mb-6 flex animate-in slide-in-from-bottom-2 duration-500 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div
                  className={`px-5 py-3 rounded-2xl max-w-[75%] text-sm leading-relaxed break-words shadow-md ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-blue-600/30"
                      : "bg-white text-gray-900 border border-gray-100 shadow-sm"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-gray-100/50 bg-white/50 backdrop-blur-sm rounded-b-2xl">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="text-sm border-gray-200 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md pr-12"
                  disabled={isLoading}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                {input && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 rounded-xl px-4 py-2 text-white shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl disabled:hover:scale-100 group"
              >
                <Send 
                  size={16} 
                  className={`transition-transform duration-300 ${isLoading ? 'animate-pulse' : 'group-hover:translate-x-0.5'}`} 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
