"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const getColorCode = (colorName: string) => {
  const colorMap: Record<string, string> = {
    'navy': '#000080',
    'off-white': '#f8f9fa',
    'light blue': 'lightblue',
    'dark blue': 'darkblue',
    'charcoal': '#36454F',
    'khaki': '#F0E68C',
    'emerald': '#50C878',
    'floral blue': '#4169e1',
    'tropical green': '#2e8b57',
    'rust': '#b7410e',
    'cream': '#FFFDD0',
    'olive': '#808000',
    'maroon': '#800000',
    'gold': '#FFD700',
    'turquoise': '#40E0D0',
  };
  return colorMap[colorName.toLowerCase()] || colorName.toLowerCase().replace(/\s+/g, '');
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1, product.colors[0], product.sizes[0]);
  };

  return (
    <Link href={`/products/${product.id}`} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider">
              OUT OF STOCK
            </span>
          </div>
        )}
        {product.inStock && (
          <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full bg-slate-900/90 backdrop-blur-md text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors shadow-lg"
            >
              <ShoppingBag size={18} />
              Quick Add
            </button>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-medium text-slate-600">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-4 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 line-through">৳{product.price + 500}</span>
            <span className="text-lg font-bold text-slate-900">৳{product.price}</span>
          </div>
          
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, idx) => (
              <div 
                key={idx} 
                className="w-3.5 h-3.5 rounded-full border border-slate-200 shadow-inner"
                style={{ backgroundColor: getColorCode(color) }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-[10px] text-slate-400 ml-1">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
