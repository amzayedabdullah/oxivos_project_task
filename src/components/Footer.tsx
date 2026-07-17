"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer id="about" className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-black tracking-widest uppercase text-white flex items-center">
              OXIVOS
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-4">
              Premium clothing for the modern individual. We believe in quality, sustainability, and exceptional design that stands the test of time.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold text-xs">
                FB
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold text-xs">
                IG
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold text-xs">
                TW
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold text-xs">
                YT
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-sm hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="opacity-0 -ml-4 transition-all" /> New Arrivals</Link></li>
              <li><Link href="/products?category=Panjabi" className="text-sm hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="opacity-0 -ml-4 transition-all" /> Panjabi</Link></li>
              <li><Link href="/products?category=Shirt" className="text-sm hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="opacity-0 -ml-4 transition-all" /> Shirts</Link></li>
              <li><Link href="/products?category=Trousers" className="text-sm hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="opacity-0 -ml-4 transition-all" /> Trousers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-white transition-colors">bKash/Nagad Payment Guide</Link></li>
              <li><Link href="/shipping" className="text-sm hover:text-white transition-colors">Delivery Timeline (BD)</Link></li>
              <li><Link href="/returns" className="text-sm hover:text-white transition-colors">Exchange & Return Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email address" 
                className="bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-slate-600 transition-colors text-sm"
              />
              <button 
                type="submit" 
                className={`font-semibold px-4 py-3 rounded-lg transition-all duration-300 text-sm w-full ${
                  subscribed 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                    : 'bg-white text-slate-950 hover:bg-slate-200'
                }`}
              >
                {subscribed ? 'Subscribed Successfully!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Oxivos. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
