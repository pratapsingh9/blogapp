const Navbar = () => {
    const logoClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
      <header className="bg-transparent backdrop-blur-sm h-16 fixed w-full z-10">
        <nav className="mx-6 h-16 lg:text-center flex justify-between items-center">
          <h1 onClick={logoClick} className="font-bold text-3xl cursor-pointer">Blogo</h1>
          <div className="flex items-center gap-4 md:gap-8">
            <h2 className="cursor-pointer font-semibold hover:text-blue-600 transition-colors">Blogs</h2>
            <h2 className="font-semibold cursor-pointer hover:text-blue-600 transition-colors">Contact</h2>
            <h2 className="font-semibold cursor-pointer hover:text-blue-600 transition-colors">About</h2>
          </div>
        </nav>
      </header>
    )
  }

export default Navbar;