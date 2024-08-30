'use client'
import React from 'react';
import { Background } from "@/components/Background";
import Footer from "@/components/footer";
import { BookOpen, TrendingUp, User } from 'lucide-react';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <Background>
      <Navbar />
      <main>
        <HeroSection />

        <NewsletterSignup />
      </main>
      <Footer />
    </Background>
  );
}

// Hero Section with Animation



// Call-to-Action (CTA) Section
const CTASection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Share Your Story?</h2>
        <p className="text-xl mb-8">Join our platform and start writing today.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors font-semibold">
          Get Started
        </button>
      </div>
    </section>
  );
}

// Newsletter Signup Section
const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-gray-100 mt-5">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl text-gray-600 mb-8">Get the latest articles and insights delivered straight to your inbox.</p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
