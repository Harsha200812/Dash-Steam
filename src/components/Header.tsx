
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#', active: true },
    { name: 'Blogs', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'About us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    item.active ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <div className="hidden md:block">
            <Button className="bg-blog-orange hover:bg-blog-orange-dark text-white px-6">
              Search
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    item.active ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-blog-orange hover:bg-blog-orange-dark text-white">
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
