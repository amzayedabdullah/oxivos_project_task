import { RefreshCw, ShieldAlert, BadgeCheck } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 text-center">Exchange & Return Policy</h1>
        <p className="text-lg text-slate-600 text-center mb-16">We stand behind the quality of every OXIVOS garment. If you are not completely satisfied, we make it easy to exchange or return your items.</p>
        
        <div className="space-y-12">
          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <RefreshCw className="text-blue-600" />
              7-Day Exchange Policy
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              You can exchange any unwashed and unworn item within 7 days of receiving your order. Size exchanges are completely free if brought to our flagship store. For courier exchanges, standard delivery charges will apply.
            </p>
            <h4 className="font-bold text-slate-900 mb-3">Conditions for Exchange:</h4>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>The item must be in its original condition (unworn, unwashed, unaltered).</li>
              <li>All original tags and packaging must be fully intact.</li>
              <li>The original invoice or proof of purchase is required.</li>
              <li>Perfumes, undergarments, and sale items are final and cannot be exchanged.</li>
            </ul>
          </section>

          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <ShieldAlert className="text-red-500" />
              Defective or Incorrect Items
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you receive a defective product or the wrong item was shipped to you, we apologize for the inconvenience. Please contact our support team within 48 hours of delivery. We will arrange a free pickup and immediately send you a replacement at absolutely no additional cost.
            </p>
          </section>

          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <BadgeCheck className="text-emerald-600" />
              Refunds
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Currently, we do not offer cash refunds. However, if a requested exchange item is out of stock, we will issue a full store credit or voucher that can be used on any future purchase with no expiration date.
            </p>
          </section>

          <div className="text-center mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-600 mb-4">Have questions about a specific return?</p>
            <a href="mailto:hello@oxivos.com" className="inline-block bg-slate-900 text-white font-bold px-8 py-3 rounded-full hover:bg-slate-800 transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
