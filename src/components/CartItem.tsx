import React from 'react';
import Image from 'next/image';
import { CartItemType, useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity, selectedColor, selectedSize } = item;

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 border-b border-slate-100 last:border-0 group">
      <Link href={`/products/${product.id}`} className="shrink-0 relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-4">
            <div>
              <Link href={`/products/${product.id}`}>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-slate-500 mt-1">
                {selectedColor && <span className="mr-3">Color: <span className="font-medium text-slate-700">{selectedColor}</span></span>}
                {selectedSize && <span>Size: <span className="font-medium text-slate-700">{selectedSize}</span></span>}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-lg font-bold text-slate-900">৳{product.price}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg overflow-hidden h-10">
            <button 
              onClick={() => updateQuantity(product.id, quantity - 1, selectedColor, selectedSize)}
              className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <div className="w-10 h-full flex items-center justify-center font-medium text-sm text-slate-800 bg-white border-x border-slate-100">
              {quantity}
            </div>
            <button 
              onClick={() => updateQuantity(product.id, quantity + 1, selectedColor, selectedSize)}
              className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>

          <button 
            onClick={() => removeFromCart(product.id, selectedColor, selectedSize)}
            className="text-slate-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
            aria-label="Remove item"
            title="Remove item"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
