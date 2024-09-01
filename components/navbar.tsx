'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const SignedInUrl = () => {
  const { data: session } = useSession();
  const trimmedEmail = (): string => {
    return session?.user?.email?.substring(0, 10) || '';
  };

  if (!session) return null;

  return (
    <div className="flex items-center py-2 px-3 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
      <img
        src={session.user?.image || " "}
        className="w-8 h-8 rounded-full mr-2 object-cover border-2 border-green-500"
        alt="User avatar"
      />
      <div className="flex-1">
        <div className="text-sm font-semibold text-gray-900">
          {session.user?.name ?? "User"}
        </div>
        <div className="text-xs text-gray-600">@{trimmedEmail()}</div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading placeholder
  }

  const LogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-sm fixed top-0 left-0 right-0 w-full z-10 shadow-sm">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-black cursor-pointer" onClick={LogoClick}>
          <Link href={'/'}>BLogo</Link>
        </h1>
        <div className="hidden md:flex items-center space-x-6 lg:ml-16 md:ml-16">
          {['Home', 'Blogs', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          {status === "authenticated" ? (
            <SignedInUrl />
          ) : (
            <button
              onClick={() => signIn('google')}
              className="bg-black text-white text-sm px-3 py-1.5 rounded-full hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
