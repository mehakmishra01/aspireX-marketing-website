'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useState } from 'react';
import VideoModal from '@/components/VideoModal';

/**
 * Hero Section - Main landing section with headline and CTAs
 * 
 * Demo Video Configuration:
 * - To use a local video: Place video file in public/ folder and set videoSrc="/demo.mp4" and videoType="local"
 * - To use YouTube: Set videoSrc="https://www.youtube.com/embed/VIDEO_ID" and videoType="youtube"
 */
export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Demo video configuration - update these to change the video
  const demoVideoSrc = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Replace with your actual video URL
  const demoVideoType: 'youtube' | 'local' = 'youtube'; // Change to 'local' if using a file from public folder

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Board Exam Preparation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Crack Boards Smarter
              </span>
              <br />
              <span className="text-gray-900">with AI-Powered PYQs</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Your AI companion for Class 10 & 12 Boards. Get step-by-step solutions from Previous Year Questions, 
              explained in simple terms. Practice smarter, not harder.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/chat">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Start Practicing with AI
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 cursor-pointer"
                onClick={() => setIsDemoOpen(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
              <div>
                <div className="font-bold text-2xl text-purple-600">10K+</div>
                <div>PYQs in Database</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-blue-600">50K+</div>
                <div>Students Helped</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-indigo-600">95%</div>
                <div>Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Chat Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm font-medium text-gray-600">AspireX AI Chat</span>
              </div>

              {/* Mock Chat Messages */}
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl rounded-br-none px-4 py-3 max-w-[80%]">
                    <p className="text-sm">How do I solve x² - 5x + 6 = 0?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 max-w-[85%]">
                    <p className="text-sm mb-2">
                      To solve x² - 5x + 6 = 0, we factorize:
                    </p>
                    <p className="text-sm mb-2">
                      (x - 2)(x - 3) = 0
                    </p>
                    <p className="text-sm">
                      Therefore, x = 2 or x = 3
                    </p>
                    <button className="mt-2 text-xs text-purple-600 hover:text-purple-700 font-medium">
                      Re-explain in simpler way →
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-3">
                  <input
                    type="text"
                    placeholder="Ask your question..."
                    className="flex-1 bg-transparent outline-none text-sm"
                    disabled
                  />
                  <button className="text-purple-600 hover:text-purple-700">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        videoSrc={demoVideoSrc}
        videoType={demoVideoType}
      />
    </section>
  );
}

