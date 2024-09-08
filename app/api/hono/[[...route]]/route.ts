import { Hono } from 'hono';
import {handle} from 'hono/vercel'
// Create a new Hono app
const app = new Hono().basePath('/api/hono/');

const blogPosts = [
  {
    id: 1,
    title: "Understanding Web 3.0: The Future of the Internet",
    description: "A comprehensive guide to the next generation of web technologies and their potential impact.",
    imageUrl: "https://picsum.photos/800/400",
    tags: ["technology", "web3", "blockchain"],
    author: {
      name: "John Doe",
      avatar: "https://wallpapers.com/images/hd/yoriichi-tsugikuni-gvagv0qgl5zoett7.jpg",
      bio: "Tech enthusiast and blockchain expert",
    },
    date: "2023-05-15",
    readTime: "8 min read",
    content: `
      # Understanding Web 3.0: The Future of the Internet
      Web 3.0 represents the next phase in the evolution of the internet...
    `,
  },
  {
    id: 2,
    title: "The Rise of AI in Everyday Life",
    description: "How artificial intelligence is changing the world we live in.",
    imageUrl: "https://picsum.photos/800/401",
    tags: ["technology", "AI", "future"],
    author: {
      name: "Jane Doe",
      avatar: "https://wallpapers.com/images/hd/yoriichi-tsugikuni-gvagv0qgl5zoett7.jpg",
      bio: "AI enthusiast and researcher",
    },
    date: "2023-06-10",
    readTime: "7 min read",
    content: `
      # The Rise of AI in Everyday Life
      Artificial Intelligence (AI) has rapidly become a part of our daily lives...
    `,
  },
  {
    id: 3,
    title: "Sustainable Tech: The Future of Green Technology",
    description: "Exploring how technology is paving the way for a more sustainable future.",
    imageUrl: "https://picsum.photos/800/402",
    tags: ["technology", "sustainability", "green tech"],
    author: {
      name: "Sam Smith",
      avatar: "https://wallpapers.com/images/hd/yoriichi-tsugikuni-gvagv0qgl5zoett7.jpg",
      bio: "Environmentalist and tech advocate",
    },
    date: "2023-07-20",
    readTime: "6 min read",
    content: `
      # Sustainable Tech: The Future of Green Technology
      Technology is not just advancing our lives but also saving the planet...
    `,
  },
];

// Route to get all blog posts
app.get('/blogs', (c) => {
  return c.json(blogPosts);
});

// Route to get a blog post by ID
app.get('/blogs/:id', (c) => {
  const id = parseInt(c.req.param('id'));
  const blogPost = blogPosts.find(post => post.id === id);

  if (blogPost) {
    return c.json(blogPost);
  } else {
    return c.json({ message: 'Blog post not found' }, 404);
  }
});



export const GET = handle(app);
export const POST = handle(app);