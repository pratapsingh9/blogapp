'use client';
import { Background } from "@/components/Background";
import './animation.css';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import Footer from "@/components/footer";

const Navbar = () => {
  const logoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <header className="bg-transparent backdrop-blur-sm h-16 fixed w-full z-10">
      <nav className="mx-6 h-16 lg:text-center flex justify-between items-center">
        <h1 onClick={logoClick} className="font-bold text-3xl cursor-pointer">Blogo</h1>
        <div className="flex items-center gap-4 md:gap-8">
          <h2 className="cursor-pointer font-semibold hover:text-blue-600 transition-colors">Blogs</h2>
          <h2 className="font-semibold cursor-pointer hover:text-blue-600 transition-colors">Contact</h2>
          <h2 className="font-semibold cursor-pointer hover:text-blue-600 transition-colors">About</h2>
        </div>
      </nav>
    </header>
  );
}

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Blogo By Pratap</h1>
        <p className="text-xl md:text-2xl mt-10 mb-8">Discover amazing stories and insights</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
          Start Reading
        </button>
      </div>
    </section>
  );
}



export default function Home() {
  return (
    <Background>
      <Navbar />
      <main>
        <HeroSection />
      </main>

      <Footer />
    </Background>
  );
}
