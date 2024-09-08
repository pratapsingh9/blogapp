'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import { Background } from "@/components/Background";
import Footer from "@/components/footer";
import { useRouter } from 'next/navigation';
import client from '@/utils/cms';
import { useQuery } from '@tanstack/react-query';
import { NEXT_QUERY_PARAM_PREFIX } from 'next/dist/lib/constants';



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

// Correctly parse the JSON response
const fetchBlogs = async () => {
  const response = await fetch('/api/hono/blogs', {
    cache: 'force-cache',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // Parse JSON here
};

const ExploreBlogs = () => {
  // Use the useQuery hook to fetch data
  const { data: blogs, error, isLoading } = useQuery({
    queryKey:['blogs'],
    queryFn:fetchBlogs
  })

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

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