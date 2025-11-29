/**
 * Testimonials data for AspireX
 */

export interface Testimonial {
  id: string;
  name: string;
  class: 10 | 12;
  board: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    class: 12,
    board: 'CBSE',
    quote: 'AspireX helped me understand calculus concepts that I was struggling with. The step-by-step explanations from PYQs made all the difference in my board exams!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rahul Kumar',
    class: 10,
    board: 'CBSE',
    quote: 'The "re-explain" feature is amazing! When I didn\'t understand a solution, I could ask for a simpler explanation. It\'s like having a personal tutor available 24/7.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ananya Patel',
    class: 12,
    board: 'ICSE',
    quote: 'Practicing with PYQ-based questions on AspireX gave me confidence. I could see the exact pattern of questions that appear in board exams. Highly recommended!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Arjun Mehta',
    class: 10,
    board: 'CBSE',
    quote: 'I love how AspireX focuses on board exam questions. It\'s not just random practice - it\'s targeted preparation. My math scores improved significantly!',
    rating: 5,
  },
];

