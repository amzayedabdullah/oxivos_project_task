"use client";

import { useState, use } from "react";
import Image from 'next/image';
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { notFound } from "next/navigation";
import { Star, Truck, RefreshCcw, ShieldCheck, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));
  
  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="flex text-sm text-slate-500 mb-8 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-50 border border-slate-100">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-cover"
              />
              {!product.inStock && (
                <div className="absolute top-6 right-6">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">
                    OUT OF STOCK
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={18} fill="currentColor" />
                  <span className="text-sm font-bold text-slate-700 ml-1">{product.rating}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-sm font-medium text-blue-600">Free Shipping</span>
              </div>
              
              <div className="flex items-end gap-3 mb-6">
                <span className="text-3xl font-bold text-slate-900">৳{product.price}</span>
                <span className="text-lg text-slate-400 line-through mb-1">৳{product.price + 500}</span>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                {product.description}
              </p>
            </div>

            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Color: <span className="text-slate-500 font-medium ml-1 capitalize">{selectedColor}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-all ${
                        selectedColor === color 
                          ? 'border-slate-900 scale-110 shadow-md' 
                          : 'border-transparent hover:scale-105 shadow-sm'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() === 'navy' ? '#000080' : color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Size: <span className="text-slate-500 font-medium ml-1">{selectedSize}</span>
                  </h3>
                  <button className="text-sm text-blue-600 font-medium underline underline-offset-4 hover:text-blue-700">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[3rem] h-12 px-4 rounded-xl border font-bold transition-all ${
                        selectedSize === size
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Quantity</h3>
                <div className="flex items-center w-32 h-12 rounded-xl border border-slate-200 bg-white">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    -
                  </button>
                  <div className="flex-1 h-full flex items-center justify-center font-bold text-slate-800 border-x border-slate-100">
                    {quantity}
                  </div>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 h-14 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                  !product.inStock 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : added
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1'
                }`}
              >
                <ShoppingBag size={20} />
                {!product.inStock ? 'Out of Stock' : added ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-10 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Truck size={18} />
                </div>
                <span className="text-sm font-medium text-slate-700">Nationwide Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <RefreshCcw size={18} />
                </div>
                <span className="text-sm font-medium text-slate-700">7 Days Exchange</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-sm font-medium text-slate-700">bKash/Nagad/COD</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
