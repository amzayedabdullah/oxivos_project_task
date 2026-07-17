"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Search, Menu, User, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { itemCount } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Collections', path: '/#featured' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-100 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors p-2 -ml-2 rounded-lg ${isTransparent && !isMobileMenuOpen ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className={`text-2xl font-black tracking-widest uppercase flex items-center ${isTransparent ? 'text-white' : 'text-slate-900'}`}>
              OXIVOS
            </Link>
          </div>

          <div className={`hidden md:flex space-x-1 items-center p-1 rounded-full border backdrop-blur-md transition-colors ${isTransparent ? 'bg-white/10 border-white/20' : 'bg-slate-100/50 border-slate-200/60'}`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  href={link.path} 
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? (isTransparent ? 'bg-white/20 text-white shadow-sm' : 'bg-white text-slate-900 shadow-sm')
                      : (isTransparent ? 'text-slate-200 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100')
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-5">
            <div className="relative flex items-center">
              {isSearchOpen && (
                <form onSubmit={handleSearch} className="absolute right-8 top-1/2 -translate-y-1/2 w-48 sm:w-64">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full bg-white border border-slate-200 text-slate-800 px-4 py-1.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-sm animate-in fade-in slide-in-from-right-2"
                    autoFocus
                    onBlur={() => setTimeout(() => !searchQuery && setIsSearchOpen(false), 200)}
                  />
                </form>
              )}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`hidden sm:block transition-colors ${isTransparent && !isSearchOpen ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {isSearchOpen ? <X size={20} className="text-slate-900" /> : <Search size={20} />}
              </button>
            </div>
            <Link href="/login" className={`hidden sm:block transition-colors ${isTransparent ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              <User size={20} />
            </Link>
            
            <Link href="/cart" className={`relative group p-2 rounded-full transition-colors border ${isTransparent ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'}`}>
              <ShoppingBag size={20} className="group-hover:scale-110 transition-transform duration-300" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-in zoom-in">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-slate-100 absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="border-t border-slate-100 my-4"></div>
            
            <Link 
              href="/login" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                <User size={18} />
              </div>
              Sign In / Register
            </Link>
            
            <form onSubmit={(e) => {
              handleSearch(e);
              setIsMobileMenuOpen(false);
            }} className="px-3 mt-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-slate-100 border border-slate-200 text-slate-800 pl-11 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl mt-3 hover:bg-slate-800 transition-colors">
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
