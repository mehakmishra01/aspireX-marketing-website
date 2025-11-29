'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, RotateCcw, ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { getMockResponse } from '@/lib/mockChatbot';
import type { ChatMessage } from '@/lib/mockChatbot';
import { pyqs } from '@/data/pyqs';

/**
 * Chat Page - Full-page chatbot interface for AspireX AI
 */
export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! I\'m AspireX AI, your board exam assistant. I can help you solve questions from Class 10 and 12 board exams with step-by-step explanations.\n\nYou can ask me:\n• How to solve quadratic equations\n• Explain calculus concepts\n• Help with physics problems\n• And much more!\n\nTry asking a question or select a sample PYQ below.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [simplifiedMessageIds, setSimplifiedMessageIds] = useState<Set<string>>(new Set());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [selectedClass, setSelectedClass] = useState<10 | 12 | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const response = getMockResponse(currentInput);
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

  const handlePYQClick = (question: string) => {
    setInput(question);
  };

  const filteredPYQs = selectedClass
    ? pyqs.filter((pyq) => pyq.class === selectedClass)
    : pyqs;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <Sparkles className="h-6 w-6 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AspireX
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-180px)]">
          {/* Left Sidebar - PYQ Suggestions */}
          <div className="lg:col-span-1 hidden lg:block">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Sample PYQs</CardTitle>
                <p className="text-sm text-gray-600">Click to ask</p>
              </CardHeader>
              <CardContent className="space-y-3 overflow-y-auto">
                {/* Class Filter */}
                <div className="flex space-x-2 mb-4">
                  <Button
                    size="sm"
                    variant={selectedClass === null ? 'default' : 'outline'}
                    onClick={() => setSelectedClass(null)}
                    className="text-xs"
                  >
                    All
                  </Button>
                  <Button
                    size="sm"
                    variant={selectedClass === 10 ? 'default' : 'outline'}
                    onClick={() => setSelectedClass(10)}
                    className="text-xs"
                  >
                    Class 10
                  </Button>
                  <Button
                    size="sm"
                    variant={selectedClass === 12 ? 'default' : 'outline'}
                    onClick={() => setSelectedClass(12)}
                    className="text-xs"
                  >
                    Class 12
                  </Button>
                </div>

                {/* PYQ List */}
                {filteredPYQs.slice(0, 10).map((pyq) => (
                  <button
                    key={pyq.id}
                    onClick={() => handlePYQClick(pyq.question)}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-purple-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-all text-sm"
                  >
                    <div className="font-semibold text-purple-600 text-xs mb-1">
                      {pyq.subject} • {pyq.topic}
                    </div>
                    <div className="text-gray-700 line-clamp-2">{pyq.question}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {pyq.year} • {pyq.board}
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-3 flex flex-col">
            <Card className="flex-1 flex flex-col">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <span>AspireX AI Assistant</span>
                </CardTitle>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
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
                          className="mt-3 text-xs text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <RotateCcw className="h-3 w-3" />
                          <span>Re-explain in simpler way</span>
                        </button>
                      )}
                      <div className="text-xs text-gray-500 mt-2">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-200">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '0.2s' }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '0.4s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg">
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Ask your question (e.g., 'How do I solve x² - 5x + 6 = 0?')"
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
                <p className="text-xs text-gray-500 mt-2">
                  Tip: Ask specific questions or select a PYQ from the sidebar
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

