import React from 'react';
import { format } from 'date-fns';
import { Calendar, Tag, Share, ArrowRight, ThumbsUp, BookmarkPlus, Twitter, Facebook, } from 'lucide-react';
import { LinkedinIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import pratapImage from '@/public/pratap.jpg'
import { useQuery } from '@tanstack/react-query';
interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  content: string;
  author: {
    name: string;
    avatar: any;
    bio: string;
  };
  date: string;
  readTime: string;
}

const BlogContent = ({ content }: { content: string }) => (
  <article className="prose prose-lg max-w-none">
    <ReactMarkdown
      components={{
        img: ({ node, ...props }) => (
          <img
            {...props}
            alt={props.alt || 'Blog Image'}
            className="w-full h-auto object-cover rounded-lg my-8 shadow-lg"
          />
        ),
        h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-8 text-gray-900" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold my-6 text-gray-800" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-2xl font-medium my-4 text-gray-700" {...props} />,
        p: ({ node, ...props }) => <p className="my-6 leading-relaxed text-lg text-gray-700" {...props} />,
        li: ({ node, ...props }) => <li className="my-2 text-gray-700" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-xl text-gray-700" {...props} />
        ),
        code: ({ node, inline, ...props }: any) =>
          inline ? (
            <code className="bg-gray-100 text-gray-800 p-1 rounded-md font-mono text-sm" {...props} />
          ) : (
            <pre className="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto font-mono text-sm">
              <code {...props} />
            </pre>
          ),
      }}
    >
      {content}
    </ReactMarkdown>
  </article>
);

const Button = ({ children, variant = 'primary', size = 'md', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
  };
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};






const FollowOnSocials = () => {
  return (
    <div className="lg:flex hidden flex-row text-center items-center">
      <Button>
        <a target="_blank" href="https://www.linkedin.com/in/pratapsinghsisodiya/">
          Linkedin
        </a>
      </Button>
      <div className="ml-5"></div>
      <Button>
        <a target="_blank" href="https://www.linkedin.com/in/pratapsinghsisodiya/">
          Twitter
        </a>
      </Button>
    </div>
  );
};



const RelatedPosts = ({ currentPostId, blogs }: { currentPostId: number; blogs: BlogPost[] }) => {
  const relatedPosts = blogs.filter(blog => blog.id !== currentPostId).slice(0, 3);

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 text-gray-800">More from Medium</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-3 text-gray-800">{post.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{post.description.substring(0, 100)}...</p>
            </div>
            <div className="bg-gray-50 p-4">
              <a href={`/blogs/${post.id}`} className="text-blue-600 font-semibold flex items-center hover:text-blue-700 transition duration-300">
                Read More <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const fetchBlogs = async () => {
  const response = await fetch('/api/hono/blogs', {
    cache: 'force-cache',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // Parse JSON here
};

export default function BlogPage({ params }: { params: { postid: string } }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs
  })
  const blogs = data;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const selectedBlog = blogs.find(blog => blog.id.toString() === params.postid);

  if (!selectedBlog) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100 text-2xl text-gray-700">Blog post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-8">
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{selectedBlog.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{selectedBlog.description}</p>
            <div className="flex items-center mb-6">
              <img src={'https://wallpapers.com/images/hd/yoriichi-tsugikuni-gvagv0qgl5zoett7.jpg'} alt={selectedBlog.author.name} className="h-12 w-12 rounded-full mr-4" />
              <div>
                <p className="font-semibold text-gray-800">{'Pratap Singh Sisodiya'}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-3">{format(new Date(selectedBlog.date), 'MMMM d, yyyy')}</span>
                  <span>·</span>
                  <span className="ml-3">{selectedBlog.readTime}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedBlog.tags.map(tag => (
                <span key={tag} className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">

            </div>
          </header>
          <img
            src={selectedBlog.imageUrl}
            alt={selectedBlog.title}
            className="w-full h-auto object-cover rounded-lg mb-12 shadow-lg"
          />
          <BlogContent content={selectedBlog.content} />
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={'https://wallpapers.com/images/hd/yoriichi-tsugikuni-gvagv0qgl5zoett7.jpg'} alt={selectedBlog.author.name} className="h-16 w-16 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-lg text-gray-800">{'Pratap Singh Sisodiya'}</p>
                  <p className="text-gray-600">{'Tech enthusiast and Devloper'}</p>
                </div>
              </div>
              <FollowOnSocials />

            </div>
          </footer>
        </article>
        <RelatedPosts currentPostId={selectedBlog.id} blogs={blogs} />
      </main>
      <Footer />
    </div>
  );
}