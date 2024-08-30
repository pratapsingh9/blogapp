import React from 'react';
import { Background } from "@/components/Background";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <AlertTriangle className="w-24 h-24 text-yellow-500 mb-8 " />
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-xl mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};

const NotFound = () => {
  return (
    <Background>
      <Navbar />
      <ErrorPage />
      <Footer />
    </Background>
  );
};

export default NotFound;