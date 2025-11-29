/**
 * Mock chatbot logic for AspireX
 * This simulates AI responses based on user input
 * 
 * TODO: Replace this with actual AI integration (e.g., Google Gemini API)
 * The real implementation would:
 * 1. Send user query to AI API
 * 2. Query PYQ database for similar questions
 * 3. Generate contextual responses based on board exam patterns
 * 4. Return formatted responses with step-by-step solutions
 */

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isSimplified?: boolean;
}

export interface ChatResponse {
  response: string;
  simplifiedResponse: string;
  steps?: string[];
}

/**
 * Mock function that simulates AI chatbot responses
 * In production, this would call the actual AI API (e.g., Google Gemini)
 */
export function getMockResponse(userInput: string): ChatResponse {
  const lowerInput = userInput.toLowerCase();

  // Mock responses based on keywords
  if (lowerInput.includes('quadratic') || lowerInput.includes('x²') || lowerInput.includes('x^2')) {
    return {
      response: `To solve the quadratic equation x² - 5x + 6 = 0, we can use factorization method.

Step 1: Factorize the equation
x² - 5x + 6 = (x - 2)(x - 3) = 0

Step 2: Apply zero product property
Either (x - 2) = 0 or (x - 3) = 0

Step 3: Solve for x
x = 2 or x = 3

Therefore, the roots of the equation are x = 2 and x = 3.

Verification: Substitute x = 2: (2)² - 5(2) + 6 = 4 - 10 + 6 = 0 ✓
Substitute x = 3: (3)² - 5(3) + 6 = 9 - 15 + 6 = 0 ✓`,
      simplifiedResponse: `Let's solve x² - 5x + 6 = 0 step by step!

Think of it like this: we need to find two numbers that:
- Multiply to give +6 (the constant term)
- Add up to give -5 (the coefficient of x)

Those numbers are -2 and -3 because:
- (-2) × (-3) = +6 ✓
- (-2) + (-3) = -5 ✓

So we can write: (x - 2)(x - 3) = 0

This means either:
- x - 2 = 0, so x = 2
- OR x - 3 = 0, so x = 3

Answer: x = 2 or x = 3

You can check: Put x = 2 in the equation → 4 - 10 + 6 = 0 ✓`,
      steps: [
        'Factorize the quadratic expression',
        'Apply zero product property',
        'Solve for x',
        'Verify the solutions',
      ],
    };
  }

  if (lowerInput.includes('derivative') || lowerInput.includes('differentiate')) {
    return {
      response: `To find the derivative of f(x) = x³ + 2x² - 5x + 1, we use the power rule.

The power rule states: d/dx(xⁿ) = n·xⁿ⁻¹

Applying this to each term:
- d/dx(x³) = 3x²
- d/dx(2x²) = 2 × 2x = 4x
- d/dx(-5x) = -5
- d/dx(1) = 0

Therefore, f'(x) = 3x² + 4x - 5

This is the derivative of the given function.`,
      simplifiedResponse: `Finding derivatives is like finding how fast something changes!

For f(x) = x³ + 2x² - 5x + 1, we find the derivative of each part:

Rule: The derivative of xⁿ is n·xⁿ⁻¹

- x³ becomes 3x² (bring down 3, reduce power by 1)
- 2x² becomes 4x (2 × 2 = 4, reduce power by 1)
- -5x becomes -5 (x becomes 1, so just -5)
- 1 becomes 0 (constants disappear)

So f'(x) = 3x² + 4x - 5

That's it! The derivative tells us the slope at any point.`,
      steps: [
        'Apply power rule to each term',
        'Simplify coefficients',
        'Combine all terms',
      ],
    };
  }

  if (lowerInput.includes('trigonometry') || lowerInput.includes('sin') || lowerInput.includes('cos')) {
    return {
      response: `Given: sin θ = 3/5

Using the Pythagorean identity: sin²θ + cos²θ = 1

Step 1: Find cos²θ
cos²θ = 1 - sin²θ = 1 - (3/5)² = 1 - 9/25 = 16/25

Step 2: Find cos θ
cos θ = ±√(16/25) = ±4/5

Since sin θ is positive and we're typically in the first quadrant for board questions, cos θ = 4/5

Step 3: Find tan θ
tan θ = sin θ / cos θ = (3/5) / (4/5) = 3/4

Therefore: cos θ = 4/5 and tan θ = 3/4`,
      simplifiedResponse: `We know sin θ = 3/5. Let's find cos θ and tan θ!

Imagine a right triangle:
- Opposite side = 3
- Hypotenuse = 5
- Adjacent side = ? (we need to find this)

Using Pythagoras: Adjacent² = 5² - 3² = 25 - 9 = 16
So Adjacent = 4

Now:
- cos θ = Adjacent/Hypotenuse = 4/5
- tan θ = Opposite/Adjacent = 3/4

That's it! cos θ = 4/5 and tan θ = 3/4

Remember: sin²θ + cos²θ always equals 1!`,
      steps: [
        'Use Pythagorean identity',
        'Calculate cos²θ',
        'Find cos θ',
        'Calculate tan θ using tan = sin/cos',
      ],
    };
  }

  if (lowerInput.includes('integration') || lowerInput.includes('integrate') || lowerInput.includes('∫')) {
    return {
      response: `To evaluate ∫(3x² + 2x - 1)dx, we integrate each term separately.

Using the power rule for integration: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C

Step 1: ∫3x² dx = 3 × (x³/3) = x³
Step 2: ∫2x dx = 2 × (x²/2) = x²
Step 3: ∫(-1) dx = -x

Therefore, ∫(3x² + 2x - 1)dx = x³ + x² - x + C

where C is the constant of integration.`,
      simplifiedResponse: `Integration is the reverse of differentiation!

For ∫(3x² + 2x - 1)dx, we integrate each part:

Rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C

- 3x² → increase power by 1 (becomes x³), divide by new power: 3x³/3 = x³
- 2x → becomes x², divide by 2: 2x²/2 = x²
- -1 → becomes -x (think of it as -1·x¹)

So the answer is: x³ + x² - x + C

C is a constant that could be any number. In board exams, always remember to add +C!`,
      steps: [
        'Apply power rule to each term',
        'Simplify coefficients',
        'Add constant of integration C',
      ],
    };
  }

  // Default response
  return {
    response: `I understand you're asking about: "${userInput}"

Based on Previous Year Questions from board exams, here's a detailed explanation:

[This is a mock response. In production, this would be generated by AI trained on PYQs]

The solution involves understanding the core concept and applying it step by step. Let me break it down:

1. First, identify what the question is asking
2. Recall relevant formulas and concepts from your syllabus
3. Apply the appropriate method
4. Verify your answer

Would you like me to explain any specific part in more detail?`,
    simplifiedResponse: `Let me explain this in a simpler way!

Think of it like this: [Simplified explanation based on PYQ patterns]

The key idea is: [Core concept in simple terms]

Here's what you need to do:
1. [Simple step 1]
2. [Simple step 2]
3. [Simple step 3]

Remember: Practice similar questions from previous year papers to master this topic!

Would you like to see a similar PYQ example?`,
    steps: [
      'Understand the question',
      'Identify the method',
      'Apply the solution',
      'Verify the answer',
    ],
  };
}

/**
 * Generate a simplified version of a response
 * In production, this would call the AI with a "simplify" instruction
 */
export function getSimplifiedResponse(originalResponse: string): string {
  // In production, this would make a new API call asking for simplification
  // For now, we return a mock simplified version
  return `Here's a simpler explanation:

${originalResponse}

[Simplified version with easier language and more examples]`;
}

