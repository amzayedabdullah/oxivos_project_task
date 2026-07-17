"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import Link from "next/link";
import { ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";

export default function CartPage() {
  const { cartItems, cartTotal, itemCount } = useCart();

  const shipping = cartTotal > 5000 ? 0 : 120;
  const total = cartTotal + (cartTotal > 0 ? shipping : 0);

  if (cartItems.length === 0) {
    return (
      <div className="bg-slate-50 min-h-screen pt-24 pb-20 flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 text-slate-300">
          <ShoppingBag size={40} />
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Your cart is empty</h1>
        <p className="text-slate-500 mb-8 max-w-md text-center">
          Looks like you haven&apos;t added anything to your cart yet. Discover our premium collection and elevate your style.
        </p>
        <Link 
          href="/products" 
          className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center gap-2"
        >
          Start Shopping <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">
          Shopping Cart ({itemCount})
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex flex-col">
              {cartItems.map((item, index) => (
                <CartItem key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}-${index}`} item={item} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">৳{cartTotal}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery Charge</span>
                  <span className="font-medium text-slate-900">
                    {shipping === 0 ? <span className="text-emerald-500 font-bold">Free</span> : `৳${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-slate-500">
                    Add ৳{5000 - cartTotal} more for free delivery in BD!
                  </p>
                )}
              </div>
              
              <div className="border-t border-slate-100 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-3xl font-black text-slate-900 tracking-tight">৳{total}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 text-right">Including VAT</p>
              </div>
              
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mb-4">
                Proceed to Checkout <ArrowRight size={18} />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>Cash on Delivery & bKash available</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
