'use client';

import { Brain, BookOpen, MessageSquare, Zap, Target, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

/**
 * Features Section - Showcases key features of AspireX
 * 
 * Each feature card is clickable and navigates to relevant sections:
 * - AI Answers from Boards PYQs → #pyq-ai section
 * - Step-by-Step Maths Solutions → #how-it-works section
 * - Re-Explain in Simpler Words → #chat-preview section
 * - Class 10 & 12 Specific Content → #class-10 section
 * - Instant Doubt Solving → /chat page
 * - Clean Explanations → /chat page
 */
export default function FeaturesSection() {
  const router = useRouter();

  /**
   * Smooth scroll to a section on the same page
   * Accounts for sticky navbar height (80px)
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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

  /**
   * Handle feature card click
   */
  const handleFeatureClick = (target: string, isRoute: boolean = false) => {
    if (isRoute) {
      router.push(target);
    } else {
      scrollToSection(target);
    }
  };

  const features = [
    {
      icon: Brain,
      title: 'AI Answers from Boards PYQs',
      description: 'Get solutions based on actual Previous Year Questions from CBSE, ICSE, and state boards.',
      target: 'pyq-ai', // Scrolls to PYQ section
      isRoute: false,
    },
    {
      icon: BookOpen,
      title: 'Step-by-Step Maths Solutions',
      description: 'Every solution is broken down into clear, easy-to-follow steps that match board exam patterns.',
      target: 'how-it-works', // Scrolls to How It Works section
      isRoute: false,
    },
    {
      icon: MessageSquare,
      title: 'Re-Explain in Simpler Words',
      description: 'Didn\'t understand? Click to get the same explanation in easier, beginner-friendly language.',
      target: 'chat-preview', // Scrolls to Chatbot Preview section
      isRoute: false,
    },
    {
      icon: GraduationCap,
      title: 'Class 10 & 12 Specific Content',
      description: 'Tailored content for your class level, covering all major subjects and board patterns.',
      target: 'class-10', // Scrolls to Class 10 section
      isRoute: false,
    },
    {
      icon: Zap,
      title: 'Instant Doubt Solving',
      description: 'Get answers instantly, 24/7. No waiting for tutors or study groups.',
      target: '/chat', // Navigates to chat page
      isRoute: true,
    },
    {
      icon: Target,
      title: 'Clean Explanations like a Top Tutor',
      description: 'AI explanations that feel like learning from the best teachers, focused on board exam success.',
      target: '/chat', // Navigates to chat page
      isRoute: true,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Why AspireX for Boards?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to ace your board exams, powered by AI trained on thousands of PYQs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-purple-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleFeatureClick(feature.target, feature.isRoute)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleFeatureClick(feature.target, feature.isRoute);
                  }
                }}
                aria-label={`${feature.title} - Click to learn more`}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

