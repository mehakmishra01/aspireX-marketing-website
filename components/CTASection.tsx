'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * Final CTA Section - Strong call-to-action before footer
 */
export default function CTASection() {
  /**
   * Smooth scroll to features section
   */
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zMCAzMGgxMHYxMEgzMHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Sparkles className="h-5 w-5" />
            <span className="font-medium">Start Your Journey Today</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to Ace Your Boards with AI?
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of students who are already using AspireX to prepare smarter for their board exams. 
            Get step-by-step solutions from PYQ-trained AI, available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold group"
              >
                Start Practicing with AspireX
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 cursor-pointer"
              onClick={scrollToFeatures}
            >
              Learn More
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center space-x-8 text-sm text-white/80">
            <div>
              <div className="font-bold text-2xl">10K+</div>
              <div>PYQs Available</div>
            </div>
            <div>
              <div className="font-bold text-2xl">50K+</div>
              <div>Students Helped</div>
            </div>
            <div>
              <div className="font-bold text-2xl">24/7</div>
              <div>AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

