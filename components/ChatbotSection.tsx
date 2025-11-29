'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Send, RotateCcw } from 'lucide-react';
import { getMockResponse } from '@/lib/mockChatbot';
import type { ChatMessage } from '@/lib/mockChatbot';
import Link from 'next/link';

/**
 * Chatbot Preview Section - Interactive chatbot UI for homepage
 */
export default function ChatbotSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! I\'m AspireX AI. I can help you solve board exam questions step-by-step. Ask me anything from Class 10 or 12!',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [simplifiedMessageIds, setSimplifiedMessageIds] = useState<Set<string>>(new Set());

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const response = getMockResponse(input);
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleReExplain = (messageId: string) => {
    const message = messages.find((m) => m.id === messageId);
    if (!message || message.role !== 'assistant') return;

    const response = getMockResponse(''); // Get simplified version
    const simplifiedResponse = getMockResponse(message.content).simplifiedResponse;

    setSimplifiedMessageIds((prev) => new Set(prev).add(messageId));

    const simplifiedMessage: ChatMessage = {
      id: `${messageId}-simplified`,
      role: 'assistant',
      content: simplifiedResponse,
      timestamp: new Date(),
      isSimplified: true,
    };

    setMessages((prev) => [...prev, simplifiedMessage]);
  };

  return (
    <section id="chat-preview" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Try AspireX AI Chatbot
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how our AI helps solve board exam questions with step-by-step explanations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span className="font-semibold">AspireX AI Assistant</span>
              </div>
              <Link href="/chat">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  Full Chat <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-none'
                        : message.isSimplified
                        ? 'bg-blue-50 text-gray-800 border-2 border-blue-200 rounded-bl-none'
                        : 'bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    {message.role === 'assistant' && !message.isSimplified && (
                      <button
                        onClick={() => handleReExplain(message.id)}
                        disabled={simplifiedMessageIds.has(message.id)}
                        className="mt-2 text-xs text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <RotateCcw className="h-3 w-3" />
                        <span>Re-explain in simpler way</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Ask a question (e.g., 'How do I solve x² - 5x + 6 = 0?')"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Try: "Find the derivative of x³ + 2x²" or "Explain quadratic equations"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

