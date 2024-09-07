'use client';
import Navbar from '@/components/navbar';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogContent = ({ content }: { content: string }) => (
  <article className="prose prose-lg mx-auto my-8 px-4 md:px-8 lg:px-12 xl:px-16">
    <ReactMarkdown
      components={{
        img: ({ node, ...props }) => (
          <img
            {...props}
            alt={props.alt || 'Blog Image'}
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-lg my-6"
          />
        ),
        h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-8" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold my-6" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-2xl font-medium my-4" {...props} />,
        p: ({ node, ...props }) => <p className="my-6 leading-relaxed text-lg" {...props} />,
        li: ({ node, ...props }) => <li className="list-disc list-inside my-4" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-gray-500 pl-4 italic my-6 text-lg" {...props} />
        ),
        code: ({ node, ...props }) => (
          <code className="bg-gray-100 text-gray-800 p-1 rounded-md">{props.children}</code>
        ),
        pre: ({ node, ...props }) => (
          <pre className="bg-gray-200 p-4 rounded-md my-4 overflow-x-auto">{props.children}</pre>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  </article>
);

export default function BlogPage({ params }: { params: { postid: string } }) {
  const blogs = [
    {
      title: "Understanding Web 3.0",
      description: "A comprehensive guide to the future of the internet.",
      imageUrl: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
      id: 1,
      tags: ["#technology", "#web3"],
      content: `
# Understanding Web 3.0
Web 3.0 represents the next phase in the evolution of the web. It aims to create a more decentralized, open, and user-centric internet.
## Key Concepts
- **Decentralization**: No single entity controls the network.
- **Blockchain**: The foundation of Web 3.0.
- **Smart Contracts**: Self-executing contracts with the terms directly written into code.


##

## Some days we have to create our own ways to make this thing dont you thing its bad
- what your advice on this things explan me ??
      `,
    },
    {
      title: "The Rise of AI",
      description: "How artificial intelligence is reshaping our world.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvimPzwOXCXDCFyo4gygMnyo_C3kJ6XoGCDQ&s",
      id: 2,
      tags: ["#AI", "#innovation"],
      content: `
# The Rise of AI
Artificial Intelligence (AI) is rapidly transforming industries and societies. This article explores how AI is reshaping the world.
## Areas of Impact
- **Healthcare**: AI in diagnostics and treatment.
- **Finance**: Algorithmic trading and fraud detection.
- **Everyday Life**: AI in personal assistants like Siri and Alexa.
      `,
    },
    {
      title: "Sustainable Living Tips",
      description: "Simple ways to live a more eco-friendly lifestyle.",
      imageUrl: "https://www.datocms-assets.com/46272/1633199491-1633199490440.jpg?auto=format&fit=max&w=1200",
      id: 3,
      tags: ["#sustainability", "#eco-friendly"],
      content: `
# Sustainable Living Tips
Living sustainably is about reducing your environmental footprint. Here are some tips to help you live a more eco-friendly lifestyle.
## Tips
- **Reduce, Reuse, Recycle**: The three Rs of sustainability.
- **Energy Efficiency**: Use energy-efficient appliances.
- **Sustainable Transportation**: Walk, bike, or use public transit.
      `,
    },
  ];

  const selectedBlog = blogs.find(blog => blog.id.toString() === params.postid);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 pt-24 pb-16 bg-white shadow-lg rounded-lg">
        {selectedBlog && (
          <>
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-2">{selectedBlog.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{selectedBlog.description}</p>
              <img
                src={selectedBlog.imageUrl}
                alt={selectedBlog.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-lg mb-6"
              />
              <div className="mt-4">
                {selectedBlog.tags.map(tag => (
                  <span key={tag} className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    {tag}
                  </span>
                ))}
              </div>
            </header>
            <BlogContent content={selectedBlog.content} />
          </>
        )}
      </main>
    </div>
  );
}
