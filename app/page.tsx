<<<<<<< HEAD
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
=======
import React from 'react';
import { Background } from "@/components/Background";
import Footer from "@/components/footer";
import { ArrowRight, Search, BookOpen, TrendingUp, User } from 'lucide-react';
import Navbar from '@/components/navbar';
import NewsletterSignup from '@/components/newsletter';



const HeroSection = () => {
  return (
    <section className="pt-24 h-[80vh] pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
            Discover Inspiring Stories and Insights
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600">
            Join our community of writers and readers to explore diverse perspectives on life, technology, and everything in between.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl w-full md:w-auto">
              Start Reading
            </button>
      
          </div>
        </div>
>>>>>>> f81b0b8 (chnages in code)
      </div>
    </section>
  );
}

<<<<<<< HEAD
=======
const FeaturedBlogCard = ({ title, excerpt, author, date, imageSrc, category }:any) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-sm font-semibold text-blue-600 mb-2 inline-block">{category}</span>
        <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="flex items-center">
           
          </span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

const FeaturedBlogs = () => {
  const blogs = [
    {
      title: "The Future of AI in Everyday Life",
      excerpt: "Explore how artificial intelligence is shaping our daily routines and what to expect in the coming years.",
      author: "Jane Doe",
      date: "May 15, 2024",
      imageSrc: "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
      category: "Technology"
    },
    {
      title: "Sustainable Living: Small Changes, Big Impact",
      excerpt: "Discover simple ways to reduce your carbon footprint and contribute to a healthier planet.",
      author: "John Smith",
      date: "May 12, 2024",
      imageSrc: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
      category: "Lifestyle"
    },
    {
      title: "The Art of Mindfulness in a Busy World",
      excerpt: "Learn techniques to stay present and reduce stress in our fast-paced society.",
      author: "Emily Johnson",
      date: "May 10, 2024",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB5BuJxVu-nQYgyPrE08od_WL0q8qTfHia8g&s",
      category: "Health"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="blogs">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <FeaturedBlogCard key={index} {...blog} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-semibold">
            View All Blogs
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}


>>>>>>> f81b0b8 (chnages in code)


export default function Home() {
  return (
    <Background>
      <Navbar />
      <main>
        <HeroSection />
<<<<<<< HEAD
      </main>

      <Footer />
    </Background>
  );
}
=======
        <FeaturedBlogs />

        <NewsletterSignup />
      </main>
      <Footer />
    </Background>
  );
}
>>>>>>> f81b0b8 (chnages in code)
