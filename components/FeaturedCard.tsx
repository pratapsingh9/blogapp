import { ArrowRight } from "lucide-react";
import { ArticleCard } from "./featuredPosts";

export default function FeaturedBlogs () {
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
              <ArticleCard  image={""} key={index} {...blog} />
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
  