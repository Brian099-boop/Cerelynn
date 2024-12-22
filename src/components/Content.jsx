import React from 'react';

const Content = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('/bgim.jpg')` }} // Ensure the correct path for the image
      >
        <div className="flex flex-col justify-center items-center h-full text-white text-center">
          <h2 className="text-4xl font-bold">Welcome to CeCe Shop</h2>
          <p className="mt-4 text-lg">
            "Discover unbeatable deals and find the latest trends that suit your style. Shop now and upgrade your life with products that bring joy to every moment!"
          </p>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-12 bg-gray-100">
        <h3 className="text-2xl font-semibold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {/* Example Product Cards */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative w-full h-64 overflow-hidden rounded mb-4">
              <img
                src="/airpmax.png"
                alt="AirPods Max"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-lg">AirPods Max Gray</h4>
            <p className="text-gray-500 mt-1">The ultimate over-ear listening experience.</p>
            <p className="text-gray-800 font-bold text-lg mt-2">₱32,990</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative w-full h-64 overflow-hidden rounded mb-4">
              <img
                src="/max4.png"
                alt="Product 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-lg">AirPods Max Peach</h4>
            <p className="text-gray-500 mt-1">A premium sound device for audiophiles.</p>
            <p className="text-gray-800 font-bold text-lg mt-2">₱32,990</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative w-full h-64 overflow-hidden rounded mb-4">
              <img
                src="/max5.png"
                alt="Product 3"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-lg">AirPods Max Black</h4>
            <p className="text-gray-500 mt-1">Sleek design with unmatched comfort and sound.</p>
            <p className="text-gray-800 font-bold text-lg mt-2">₱32,990</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative w-full h-64 overflow-hidden rounded mb-4">
              <img
                src="/max6.png"
                alt="Product 4"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-lg">AirPods Max White</h4>
            <p className="text-gray-500 mt-1">Experience audio like never before with this masterpiece.</p>
            <p className="text-gray-800 font-bold text-lg mt-2">₱32,990</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
