export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-500 mb-10 border-b border-slate-100 pb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600">
            <h3>1. Terms</h3>
            <p>By accessing the website at OXIVOS, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

            <h3>2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on OXIVOS&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on the website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
            </ul>

            <h3>3. Disclaimer</h3>
            <p>The materials on OXIVOS&apos;s website are provided on an &apos;as is&apos; basis. OXIVOS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h3>4. Limitations</h3>
            <p>In no event shall OXIVOS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if OXIVOS or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h3>5. Accuracy of materials</h3>
            <p>The materials appearing on OXIVOS&apos;s website could include technical, typographical, or photographic errors. OXIVOS does not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice. However, we do not make any commitment to update the materials.</p>
            
            <h3>6. Modifications</h3>
            <p>OXIVOS may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

            <h3>7. Contact Information</h3>
            <p>For any legal inquiries or questions regarding these terms, please contact:</p>
            <p>Email: <strong>hello@oxivos.com</strong><br/>Phone: <strong>+8801688399676</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
