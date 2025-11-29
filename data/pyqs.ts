/**
 * Mock data for Previous Year Questions (PYQs)
 * This represents the database of board exam questions
 */

export interface PYQ {
  id: string;
  class: 10 | 12;
  subject: string;
  topic: string;
  year: number;
  board: string;
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const pyqs: PYQ[] = [
  {
    id: '1',
    class: 10,
    subject: 'Mathematics',
    topic: 'Quadratic Equations',
    year: 2023,
    board: 'CBSE',
    question: 'Find the roots of the quadratic equation x² - 5x + 6 = 0',
    difficulty: 'easy',
  },
  {
    id: '2',
    class: 10,
    subject: 'Mathematics',
    topic: 'Trigonometry',
    year: 2023,
    board: 'CBSE',
    question: 'If sin θ = 3/5, find the value of cos θ and tan θ',
    difficulty: 'medium',
  },
  {
    id: '3',
    class: 10,
    subject: 'Science',
    topic: 'Light - Reflection and Refraction',
    year: 2022,
    board: 'CBSE',
    question: 'A ray of light strikes a plane mirror at an angle of 30°. What is the angle of reflection?',
    difficulty: 'easy',
  },
  {
    id: '4',
    class: 12,
    subject: 'Mathematics',
    topic: 'Calculus - Derivatives',
    year: 2023,
    board: 'CBSE',
    question: 'Find the derivative of f(x) = x³ + 2x² - 5x + 1',
    difficulty: 'medium',
  },
  {
    id: '5',
    class: 12,
    subject: 'Mathematics',
    topic: 'Calculus - Integration',
    year: 2023,
    board: 'CBSE',
    question: 'Evaluate ∫(3x² + 2x - 1)dx',
    difficulty: 'medium',
  },
  {
    id: '6',
    class: 12,
    subject: 'Physics',
    topic: 'Electrostatics',
    year: 2022,
    board: 'CBSE',
    question: 'Two point charges +2μC and -3μC are placed 10 cm apart. Calculate the force between them.',
    difficulty: 'hard',
  },
  {
    id: '7',
    class: 12,
    subject: 'Chemistry',
    topic: 'Organic Chemistry',
    year: 2023,
    board: 'CBSE',
    question: 'Explain the mechanism of SN2 reaction with an example.',
    difficulty: 'hard',
  },
  {
    id: '8',
    class: 10,
    subject: 'Mathematics',
    topic: 'Coordinate Geometry',
    year: 2022,
    board: 'CBSE',
    question: 'Find the distance between points A(2, 3) and B(5, 7)',
    difficulty: 'easy',
  },
];

export const getPYQsByClass = (classNum: 10 | 12): PYQ[] => {
  return pyqs.filter((pyq) => pyq.class === classNum);
};

export const getPYQsBySubject = (subject: string): PYQ[] => {
  return pyqs.filter((pyq) => pyq.subject.toLowerCase() === subject.toLowerCase());
};

