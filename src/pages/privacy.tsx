import { BUSINESS } from '../constants';
const Privacy = () => (
  <div className="bg-white text-black py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-gray max-w-none space-y-4 text-gray-500 text-sm leading-relaxed">
        <p>{BUSINESS.name} respects your privacy. This policy explains how we collect, use, and protect your information when you use our website or contact us for bail bond services.</p>
        <h2 className="text-xl font-bold text-black">Information We Collect</h2>
        <p>We may collect personal information you provide directly, including your name, phone number, and message content when you use our contact form or call us.</p>
        <h2 className="text-xl font-bold text-black">How We Use Your Information</h2>
        <p>Your information is used solely to provide bail bond services and respond to your inquiries. We do not sell, rent, or share your personal information with third parties except as required by law.</p>
        <h2 className="text-xl font-bold text-black">Contact</h2>
        <p>If you have questions about this policy, contact us at <a href={BUSINESS.phoneTel} className="text-bail font-bold">{BUSINESS.phone}</a>.</p>
      </div>
    </div>
  </div>
);
export default Privacy;
