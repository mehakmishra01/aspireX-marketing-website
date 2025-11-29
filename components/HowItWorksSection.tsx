'use client';

import { User, BookOpen, MessageCircle, CheckCircle } from 'lucide-react';

/**
 * How It Works Section - 4-step process visualization
 */
export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: User,
      title: 'Choose your Class',
      description: 'Select Class 10 or Class 12 to get content tailored to your board exam level.',
    },
    {
      number: 2,
      icon: BookOpen,
      title: 'Pick a Subject or Topic',
      description: 'Choose from Maths, Physics, Chemistry, or any subject you need help with.',
    },
    {
      number: 3,
      icon: MessageCircle,
      title: 'Ask Your Question',
      description: 'Type your question, upload a PYQ image, or browse from our question bank.',
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Get Step-by-Step AI Explanation',
      description: 'Receive detailed solutions with the option to re-explain in simpler terms.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and start acing your board exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur opacity-50"></div>
                  <Icon className="h-10 w-10 text-white relative z-10" />
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-purple-300 to-blue-300"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

