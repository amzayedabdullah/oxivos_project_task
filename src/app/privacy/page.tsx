export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-500 mb-10 border-b border-slate-100 pb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600">
            <h3>1. Introduction</h3>
            <p>Welcome to OXIVOS. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

            <h3>2. The Data We Collect About You</h3>
            <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data</strong> includes bank account and payment card details (processed securely via our payment gateways, not stored on our servers).</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
            </ul>

            <h3>3. How We Use Your Personal Data</h3>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., processing and delivering your order).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h3>4. Data Security</h3>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>

            <h3>5. Contact Us</h3>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <p>Email: <strong>hello@oxivos.com</strong><br/>Phone: <strong>+8801688399676</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
