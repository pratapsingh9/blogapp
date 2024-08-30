'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import { Background } from "@/components/Background";
import Footer from "@/components/footer";
import { useRouter } from 'next/navigation';

const Navbar = dynamic(() => import('@/components/navbar'), { ssr: false });

const BlogCard = ({ title, description, imageUrl, link, tags, id }: any) => {
  const router = useRouter();

  const goToPostFullPage = (id: any) => {
    router.push(`blogs/${id}`);
  }
  return (
    <div className="flex max-w-96 flex-col bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105" onClick={
      () => goToPostFullPage(id)
    } >
      <img className="w-full h-48 object-cover rounded-t-xl" src={imageUrl} alt={title} />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {title}
          </h3>
          <p className="text-gray-700 mb-4">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag: any, idx: any) => (
            <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {tag}
            </span>
          ))}
        </div>
        <a className="inline-flex items-center gap-x-2 py-2 px-4 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-auto" href={link}>
          Read More
        </a>
      </div>
    </div>
  )
};

const ExploreBlogs = () => {
  const blogs = [
    {
      title: "Understanding Web 3.0",
      description: "A comprehensive guide to the future of the internet.",
      imageUrl: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
      link: "#",
      tags: ["#technology", "#web3"],
      id: 1,
    },
    {
      title: "The Rise of AI",
      description: "How artificial intelligence is reshaping our world.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvimPzwOXCXDCFyo4gygMnyo_C3kJ6XoGCDQ&s",
      link: "#",
      id: 2,
      tags: ["#AI", "#innovation"]
    },
    {
      title: "Sustainable Living Tips",
      description: "Simple ways to live a more eco-friendly lifestyle.",
      imageUrl: "https://www.datocms-assets.com/46272/1633199491-1633199490440.jpg?auto=format&fit=max&w=1200",
      link: "#",
      id: 3,
      tags: ["#sustainability", "#eco-friendly"]
    },
    // Add more blog objects here as needed
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </section>
  );
};

export default function BlogPage() {
  return (
    <Background>
      <Navbar />
      <main className="container mx-auto px-6 pt-24 pb-16">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Blogs
          </h1>
          <p className="text-xl text-gray-600">
            Dive into our collection of insightful articles and stories.
          </p>
        </section>
        <ExploreBlogs />
      </main>
      <Footer />
    </Background>
  );
}