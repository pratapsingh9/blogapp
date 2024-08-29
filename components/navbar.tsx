"use client"; // Ensure this line is at the top

const Navbar = () => {
  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-3xl text-black cursor-pointer">Blogo</h1>
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Blogs', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="font-medium text-gray-600 hover:text-blue-600 transition-colors">
       {item}
            </a>
          ))}
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Sign In
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
