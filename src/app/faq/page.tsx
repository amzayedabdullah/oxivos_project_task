import { CheckCircle2 } from 'lucide-react';

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 text-center">bKash & Nagad Guide</h1>
        <p className="text-lg text-slate-600 text-center mb-16">We support secure, fast mobile banking payments across all of Bangladesh. Follow the simple steps below to complete your purchase via bKash or Nagad.</p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-black">1</div>
              Paying with bKash
            </h2>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-pink-600 mt-1 shrink-0" size={20} />
                  <span className="text-slate-700">Go to your bKash app and tap on <strong>Payment</strong> (or dial *247# and choose Payment).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-pink-600 mt-1 shrink-0" size={20} />
                  <span className="text-slate-700">Enter our Merchant Account Number: <strong>01688399676</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-pink-600 mt-1 shrink-0" size={20} />
                  <span className="text-slate-700">Enter the exact total order amount shown at checkout.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-pink-600 mt-1 shrink-0" size={20} />
                  <span className="text-slate-700">Use your <strong>Order ID</strong> as the reference.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-pink-600 mt-1 shrink-0" size={20} />
                  <span className="text-slate-700">Enter your PIN to confirm. Once done, enter the <strong>Transaction ID (TrxID)</strong> on our checkout page to verify your order.</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-black">2</div>
              Paying with Nagad
            </h2>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 mt-1 shrink-0" size={20} />
                  <span className="text-slate-700">Open your Nagad app and tap on <strong>Merchant Pay</strong> (or dial *167# and select Payment).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 mt-1 shrink-0" size={20} />
                  <span className="text-slate-700">Enter our Merchant Account Number: <strong>01688399676</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 mt-1 shrink-0" size={20} />
                  <span className="text-slate-700">Enter the order amount and your <strong>Order ID</strong> in the reference field.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 mt-1 shrink-0" size={20} />
                  <span className="text-slate-700">Confirm with your PIN. Provide the <strong>Transaction ID (TrxID)</strong> on our website to complete the purchase.</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-12">
            <h4 className="font-bold text-blue-900 mb-2">Need help?</h4>
            <p className="text-blue-800 text-sm">If your payment was deducted but the order did not confirm, please contact us immediately at +8801688399676 with your TrxID. We will resolve it instantly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
