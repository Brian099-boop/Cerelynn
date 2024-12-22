import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center mb-8 text-lg text-gray-600">
        Have questions or need assistance? Reach out to us via social media or give us a call!
      </p>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center gap-6 mb-6">
            {/* Social Media Links */}
            <a href="https://www.355lovejili.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              Facebook
            </a>
            <a href="http://367836.richjili06.cc/?referralCode=jst3256" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-4">Or Reach Us at</h3>
          <p className="text-lg text-gray-600">Phone: <span className="font-semibold">+123 456 7890</span></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
