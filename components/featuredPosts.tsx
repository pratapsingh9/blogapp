import React from 'react';
import { format } from 'date-fns';

interface AuthorType {
  avatar: string;
  name: string;
}

interface ArticleProps {
  image: string;
  category: string;
  title: string;
  author: AuthorType;
  date: Date;
}

const ArticleCard = ({ image, category, title, author, date }: ArticleProps) => (
  <div className="mb-8 break-inside-avoid">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-2" />
    <div className="text-sm text-blue-600 uppercase font-semibold mb-1">{category}</div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="flex items-center text-sm text-gray-500">
      <img src={author.avatar} alt={author.name} className="w-6 h-6 rounded-full mr-2" />
      <span>{author.name}</span>
      <span className="mx-2">•</span>
      <span>{format(new Date(date), 'MMMM d, yyyy')}</span>
    </div>
  </div>
);

const FeaturedPosts = () => {
  const posts: ArticleProps[] = [
    {
      image: "/api/placeholder/800/600",
      category: "Technology",
      title: "The Future of AI in Everyday Life",
      author: { avatar: "/api/placeholder/100/100", name: "John Doe" },
      date: new Date("2024-08-15")
    },
    {
      image: "/api/placeholder/800/600",
      category: "Travel",
      title: "10 Hidden Gems in Southeast Asia",
      author: { avatar: "/api/placeholder/100/100", name: "Jane Smith" },
      date: new Date("2024-08-10")
    },
    {
      image: "/api/placeholder/800/600",
      category: "Food",
      title: "Mastering the Art of Sourdough Bread",
      author: { avatar: "/api/placeholder/100/100", name: "Mike Johnson" },
      date: new Date("2024-08-05")
    },
    {
      image: "/api/placeholder/800/600",
      category: "Health",
      title: "The Science Behind Intermittent Fasting",
      author: { avatar: "/api/placeholder/100/100", name: "Sarah Brown" },
      date: new Date("2024-07-30")
    },
    {
      image: "/api/placeholder/800/600",
      category: "Business",
      title: "Remote Work: Challenges and Opportunities",
      author: { avatar: "/api/placeholder/100/100", name: "David Lee" },
      date: new Date("2024-07-25")
    }
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
        {posts.map((post, index) => (
          <ArticleCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;