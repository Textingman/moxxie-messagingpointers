import Link from 'next/link';
import { Bot, BookOpen, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#F0F9FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#E0F2FE', color: '#0EA5E9' }}>
              <Bot className="w-4 h-4" />
              AI-Powered — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Smarter Messaging
              <span className="block" style={{ color: '#0EA5E9' }}>Powered by AI Pointers</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Get instant, expert messaging guidance — no salespeople, no pressure, just clear pointers to help you communicate better.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#0EA5E9' }}>
                Get Messaging Tips
              </Link>
              <Link href="/about" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#0EA5E9', borderColor: '#0EA5E9', backgroundColor: '#FFFFFF' }}>
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>What Our AI Agent Does For You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>A knowledgeable expert available 24/7 — with zero agenda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#0EA5E933' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE' }}>
                  <Bot className="w-7 h-7" style={{ color: '#0EA5E9' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>Instant AI Answers</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Get immediate, accurate answers to your questions — no waiting, no appointments needed.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#0EA5E933' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE' }}>
                  <ShieldCheck className="w-7 h-7" style={{ color: '#0EA5E9' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>100% Unbiased</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>No sales pressure, no hidden agendas. Just honest, independent guidance tailored to your needs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#0EA5E933' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE' }}>
                  <BookOpen className="w-7 h-7" style={{ color: '#0EA5E9' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>Always Learning</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Our AI stays up-to-date with the latest information so you always get accurate, current guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#F0F9FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Ready to Get Started?</h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>Join thousands of people who trust Messaging Pointers for clear, unbiased guidance.</p>
          <Link href="/signup" className="px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#0EA5E9' }}>
            Get Messaging Tips
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
