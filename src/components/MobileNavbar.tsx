import React, { useState } from 'react';
import { Book, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  label: string;
  route: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', route: '/' },
  { label: 'Search', route: '/search' },
  { label: 'About', route: '/about' },
  { label: 'Contact', route: '/contact' },
];

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className="sm:hidden flex justify-between px-8 items-center bg-[#f5f1e6] h-16 sticky top-0 py-8 z-20 border-b border-[#c2b280] shadow-md">
      <div className="text-3xl font-serif font-bold text-[#3e2f1c] flex items-center w-fit">
        <Book className="size-6 text-[#8b7b58] mr-2" />
        <span className="text-lg">Libra<span className="text-[#8b7b58]">.</span></span>
      </div>
      <button aria-label="Toggle menu"
        onClick={toggleMenu}
        className="hover:text-[#6b5a43] transition-colors bg-transparent"
      >
        <Menu size={24} className="text-[#8b7b58]" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-30">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
          <div className="fixed top-0 right-0 w-[300px] sm:w-[400px] h-full bg-[#f4e4c1] border-l border-[#c2b280] shadow-lg">
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center mb-8">
                <Book className="w-8 h-8 text-[#8b7b58] mr-2" />
                <span className="text-2xl font-serif font-bold text-[#3e2f1c]">
                  Libra<span className="text-[#8b7b58]">.</span>
                </span>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    to={link.route}
                    key={link.route}
                    className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                      location.pathname === link.route
                        ? 'bg-[#8b7b58] text-white'
                        : 'text-[#5b4636] hover:text-[#3e2f1c] hover:bg-[#e6d4b8]'
                    }`}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
