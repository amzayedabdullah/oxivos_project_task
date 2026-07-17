import { Truck, Map, Clock } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 text-center">Delivery Timeline</h1>
        <p className="text-lg text-slate-600 text-center mb-16">We deliver to all 64 districts in Bangladesh using premium, reliable courier services to ensure your clothes arrive safely and quickly.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6">
              <Map size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Inside Dhaka</h3>
            <p className="text-slate-500 mb-6">Express local delivery</p>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-700 font-medium">Timeline</span>
                <span className="text-slate-900 font-bold">1 - 2 Days</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-700 font-medium">Delivery Fee</span>
                <span className="text-slate-900 font-bold">৳ 60</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 font-medium">Service</span>
                <span className="text-slate-900 font-bold">Home Delivery</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
              <Truck size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Outside Dhaka</h3>
            <p className="text-slate-500 mb-6">Nationwide courier delivery</p>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-700 font-medium">Timeline</span>
                <span className="text-slate-900 font-bold">3 - 5 Days</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-700 font-medium">Delivery Fee</span>
                <span className="text-slate-900 font-bold">৳ 120</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700 font-medium">Service</span>
                <span className="text-slate-900 font-bold">Home / Point</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
          <h3 className="flex items-center gap-3 text-xl font-bold mb-4"><Clock className="text-blue-600" /> Order Tracking</h3>
          <p className="text-slate-600 leading-relaxed">
            Once your order has been dispatched, you will receive an SMS from our courier partner with a tracking link. 
            Deliveries are made between 9 AM and 8 PM. Our delivery partner will call you prior to delivery to confirm your availability.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            <strong>Note:</strong> During public holidays or major festivals (like Eid), delivery timelines may be slightly extended due to high order volumes.
          </p>
        </div>
      </div>
    </div>
  );
}
