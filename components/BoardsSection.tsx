'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calculator, BookOpen, FlaskConical, Atom } from 'lucide-react';

/**
 * Boards Section - Class 10 & Class 12 specific information
 */
export default function BoardsSection() {
  const class10Subjects = [
    { name: 'Mathematics', icon: Calculator },
    { name: 'Science', icon: Atom },
    { name: 'Social Studies', icon: BookOpen },
  ];

  const class12Subjects = [
    { name: 'Mathematics', icon: Calculator },
    { name: 'Physics', icon: Atom },
    { name: 'Chemistry', icon: FlaskConical },
    { name: 'Biology', icon: BookOpen },
  ];

  return (
    <section id="class-10" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              For Class 10 & Class 12
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored support for your board exam preparation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Class 10 Card */}
          <Card id="class-10-card" className="border-2 hover:border-purple-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-mt-20">
            <CardHeader className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl font-bold text-purple-600">Class 10</CardTitle>
                <div className="text-6xl font-bold text-purple-200">10</div>
              </div>
              <CardDescription className="text-base text-gray-700">
                Comprehensive support for Class 10 board exams
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Subjects Covered:</h4>
                <div className="grid grid-cols-3 gap-3">
                  {class10Subjects.map((subject) => {
                    const Icon = subject.icon;
                    return (
                      <div
                        key={subject.name}
                        className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
                      >
                        <Icon className="h-6 w-6 text-purple-600 mb-2" />
                        <span className="text-xs text-center text-gray-700 font-medium">
                          {subject.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Board-focused support with PYQs from CBSE, ICSE, and state boards
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Step-by-step solutions for Maths and Science problems
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Practice with questions from last 10 years of board exams
                  </p>
                </div>
              </div>

              <Link href="/chat" className="block">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white group">
                  Explore Class 10
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Class 12 Card */}
          <Card id="class-12" className="border-2 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-mt-20">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl font-bold text-blue-600">Class 12</CardTitle>
                <div className="text-6xl font-bold text-blue-200">12</div>
              </div>
              <CardDescription className="text-base text-gray-700">
                Advanced support for Class 12 board exams
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Subjects Covered:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {class12Subjects.map((subject) => {
                    const Icon = subject.icon;
                    return (
                      <div
                        key={subject.name}
                        className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <Icon className="h-6 w-6 text-blue-600 mb-2" />
                        <span className="text-xs text-center text-gray-700 font-medium">
                          {subject.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Focus on board patterns & marking schemes for higher scores
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Advanced topics: Calculus, Organic Chemistry, Modern Physics
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Detailed explanations matching board exam answer patterns
                  </p>
                </div>
              </div>

              <Link href="/chat" className="block">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group">
                  Explore Class 12
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

