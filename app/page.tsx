
import React from 'react';
import { Background } from "@/components/Background";
import Footer from "@/components/footer";
import { ArrowRight, Search, BookOpen, TrendingUp, User } from 'lucide-react';
import Navbar from '@/components/navbar';
import NewsletterSignup from '@/components/newsletter';
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
