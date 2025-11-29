/**
 * FAQ data for AspireX
 */

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Is AspireX free?',
    answer: 'AspireX offers a free plan with limited questions per day. For unlimited access, faster responses, and priority support, you can upgrade to our Pro plan.',
  },
  {
    id: '2',
    question: 'How is the AI trained?',
    answer: 'Our AI is specifically trained on thousands of Previous Year Questions (PYQs) from various boards including CBSE, ICSE, and state boards. It understands board exam patterns, marking schemes, and common question types.',
  },
  {
    id: '3',
    question: 'Does AspireX guarantee board exam marks?',
    answer: 'While AspireX helps you practice and understand concepts better through PYQ-based learning, we cannot guarantee specific marks. Success depends on consistent practice, understanding concepts, and proper exam preparation.',
  },
  {
    id: '4',
    question: 'What classes and boards are supported?',
    answer: 'Currently, AspireX supports Class 10 and Class 12 students. We cover CBSE, ICSE, and major state boards. Our database includes PYQs from the last 10 years.',
  },
  {
    id: '5',
    question: 'How are PYQs used in AspireX?',
    answer: 'Our AI chatbot is trained on a comprehensive database of Previous Year Questions. When you ask a question, the AI references similar PYQs to provide board-exam-focused explanations and step-by-step solutions.',
  },
  {
    id: '6',
    question: 'Can I ask the AI to explain again in simpler terms?',
    answer: 'Yes! That\'s one of our key features. After receiving an explanation, you can click "Re-explain in simpler way" to get a more beginner-friendly version of the same answer.',
  },
  {
    id: '7',
    question: 'Which subjects are covered?',
    answer: 'For Class 10, we cover Mathematics, Science (Physics, Chemistry, Biology), and Social Studies. For Class 12, we cover Mathematics, Physics, Chemistry, Biology, and other core subjects based on your board.',
  },
  {
    id: '8',
    question: 'How accurate are the AI explanations?',
    answer: 'Our AI explanations are based on verified PYQs and follow standard board exam marking schemes. However, we recommend cross-checking with your textbooks and consulting teachers for complex topics.',
  },
];

