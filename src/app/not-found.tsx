import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative">
        <h1 className="text-[8rem] sm:text-[12rem] font-black text-slate-100/50 leading-none tracking-tighter select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Page Not Found
          </h2>
          <p className="text-slate-500 mb-8 max-w-sm text-sm sm:text-base">
            The page you&apos;re looking for seems to have vanished. Let&apos;s get you back on track.
          </p>
          <Link 
            href="/"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
