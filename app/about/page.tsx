import Link from 'next/link';
import { Bot, ShieldCheck, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#E0F2FE', color: '#0EA5E9' }}>
              <Bot className="w-4 h-4" />
              AI-Powered — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              An AI Agent Built to Help,<br />Not to Sell
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Messaging Pointers is an AI-powered platform that guides individuals with honest, unbiased information. We're not a broker or salesperson. We're your independent advisor.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              People deserve access to clear, unbiased information without being bombarded by salespeople and high-pressure tactics.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              We built an AI agent that acts as your personal advisor — one that has no financial incentive to push you toward any particular product or service. It simply helps you understand your options and make the best decision for your situation.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Think of it as having a knowledgeable friend available 24/7, completely free, and always on your side.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE' }}>
                  <Bot className="w-5 h-5" style={{ color: '#0EA5E9' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>AI-Powered, Always Available</h3>
                  <p style={{ color: '#6B7280' }}>Our AI agent is available 24/7 to answer your questions instantly — no waiting, no appointments.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE' }}>
                  <ShieldCheck className="w-5 h-5" style={{ color: '#0EA5E9' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Completely Independent</h3>
                  <p style={{ color: '#6B7280' }}>We have no financial relationships with any providers. Our only goal is to help you make informed decisions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE' }}>
                  <BookOpen className="w-5 h-5" style={{ color: '#0EA5E9' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Education First</h3>
                  <p style={{ color: '#6B7280' }}>We believe informed people make better decisions. Our AI educates, not sells.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
