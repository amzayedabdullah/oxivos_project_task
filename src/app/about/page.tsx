import Link from 'next/link';
import { ArrowRight, Star, Shield, Leaf, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Bangladeshi Fashion.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              OXIVOS was born from a simple desire: to create premium, culturally authentic menswear that doesn't compromise on modern aesthetics, quality, or comfort. We blend traditional craftsmanship with contemporary design.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-1/4 translate-y-24 translate-x-1/3 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/images/1.jpg" 
                alt="Our craftsmanship" 
                className="w-full rounded-2xl shadow-2xl object-cover h-[500px]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Our Story</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Starting in a small studio in Dhaka, our founders recognized a gap in the market. While there were plenty of traditional clothing options, finding something that felt truly premium, with impeccable stitching, high-grade fabrics, and a modern fit, was a challenge.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We spent years sourcing the finest cotton and silk blends, partnering with generational artisans, and refining our cuts. Today, OXIVOS stands as a testament to what Bangladeshi fashion can achieve on a global standard.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-4xl font-black text-slate-900 mb-2">50k+</h4>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Happy Customers</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-slate-900 mb-2">100%</h4>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Locally Sourced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Experience the Difference</h2>
          <p className="text-lg text-slate-600 mb-10">
            Join thousands of modern men who have upgraded their traditional wardrobe with OXIVOS.
          </p>
          <Link href="/products" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-xl">
            Shop the Collection <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
