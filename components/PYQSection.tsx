'use client';

import { Database, FileText, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { pyqs } from '@/data/pyqs';

/**
 * PYQ-Based AI Section - Explains the power of Previous Year Questions
 */
export default function PYQSection() {
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Science', 'Biology'];
  const class10PYQs = pyqs.filter((pyq) => pyq.class === 10).slice(0, 3);
  const class12PYQs = pyqs.filter((pyq) => pyq.class === 12).slice(0, 3);

  const stats = [
    { icon: Database, value: '10,000+', label: 'PYQs in Database' },
    { icon: FileText, value: '10 Years', label: 'Question History' },
    { icon: Award, value: 'All Boards', label: 'CBSE, ICSE & More' },
    { icon: TrendingUp, value: '95%', label: 'Pattern Match Rate' },
  ];

  return (
    <section id="pyq-ai" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Powered by Boards PYQs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not random AI – our system is built from thousands of actual Previous Year Questions. 
            Every answer is tailored to board exam patterns and marking schemes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center border-2 hover:border-purple-300 transition-colors">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Subjects Covered */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Subjects Covered
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {subjects.map((subject) => (
              <span
                key={subject}
                className="px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full font-medium hover:from-purple-200 hover:to-blue-200 transition-colors"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Sample PYQs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Class 10 PYQs */}
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Class 10 Sample PYQs</CardTitle>
              <CardDescription>Examples from our database</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {class10PYQs.map((pyq) => (
                <div
                  key={pyq.id}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      {pyq.subject} • {pyq.topic}
                    </span>
                    <span className="text-xs text-gray-500">{pyq.year} • {pyq.board}</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">{pyq.question}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Class 12 PYQs */}
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Class 12 Sample PYQs</CardTitle>
              <CardDescription>Examples from our database</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {class12PYQs.map((pyq) => (
                <div
                  key={pyq.id}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {pyq.subject} • {pyq.topic}
                    </span>
                    <span className="text-xs text-gray-500">{pyq.year} • {pyq.board}</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">{pyq.question}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Trust Message */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200">
          <p className="text-lg text-gray-700 font-medium">
            <span className="text-purple-600 font-bold">Trusted by thousands of students</span> who've aced their board exams using our PYQ-powered AI.
          </p>
        </div>
      </div>
    </section>
  );
}

