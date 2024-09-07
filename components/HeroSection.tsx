import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-24 h-[80vh] pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}

            className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight"
          >
            Discover Inspiring Stories and Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl mb-10 text-gray-600"
          >
            Join our community of writers and readers to explore diverse perspectives on life, technology, and everything in between.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
          >
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl w-full md:w-auto">
              <Link href={'/blogs'}>Start Reading</Link>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export default HeroSection;