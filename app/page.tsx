import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PYQSection from '@/components/PYQSection';
import ChatbotSection from '@/components/ChatbotSection';
import BoardsSection from '@/components/BoardsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

/**
 * Home Page - Main marketing page for AspireX
 * Contains all sections: Hero, Features, How It Works, PYQ Section, Chatbot Preview, 
 * Class 10/12, Testimonials, Pricing, FAQ, and Final CTA
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PYQSection />
      <ChatbotSection />
      <BoardsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
