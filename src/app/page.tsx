import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Truck, ShieldCheck, Clock } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold tracking-wider mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              NEW FESTIVE COLLECTION
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
              Authentic <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Lifestyle.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg mx-auto md:mx-0 font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              Discover premium Panjabis and ethnic wear designed for the modern Bangladeshi man.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
              <Link href="/products" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                Shop Now <ArrowRight size={20} />
              </Link>
              <Link href="#featured" className="bg-slate-900/40 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Nationwide Delivery in BD</h3>
              <p className="text-slate-500 text-sm">Inside Dhaka: ৳60 | Outside Dhaka: ৳120. Fast and reliable delivery via Pathao/Steadfast.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cash on Delivery & bKash</h3>
              <p className="text-slate-500 text-sm">Pay securely via bKash, Nagad, or simply pay cash when you receive the product.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Easy Exchange Policy</h3>
              <p className="text-slate-500 text-sm">Size doesn&apos;t fit? We offer an easy 7-day exchange policy for all items.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Curated For You</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Top Panjabis & Kurtas</h2>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/products" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors bg-blue-50 px-6 py-3 rounded-full">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/promo.png"
            alt="Promo Background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-amber-400 mb-6">Eid Pre-Booking Offer</h2>
          <p className="text-xl text-slate-200 mb-10">Get up to 20% off on all Premium Panjabis. Limited stock available.</p>
          <Link href="/products" className="inline-block bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-xl">
            Shop The Offer
          </Link>
        </div>
      </section>
    </div>
  );
}
