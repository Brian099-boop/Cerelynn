import React from 'react';

const Blog = () => {
    // Sample blog posts data related to sales and products
    const posts = [
        {
            id: 1,
            title: 'Big Winter Sale: Get Up to 50% Off on Electronics!',
            excerpt: 'This winter season, we’re offering massive discounts on our top electronic products. Don’t miss out on our limited-time sale!',
            date: 'December 21, 2024',
            imageUrl: 'bl2.jpg', // Placeholder image
        },
        {
            id: 2,
            title: 'Top 5 Products You Shouldn’t Miss This Holiday Season',
            excerpt: 'Looking for the perfect gift? Check out these five amazing products that will make your loved ones happy!',
            date: 'December 19, 2024',
            imageUrl: 'bl3.jpg', // Placeholder image
        },
        {
            id: 3,
            title: 'How Our Wireless Headphones Can Change Your Music Experience',
            excerpt: 'Experience sound like never before with our top-rated wireless Bluetooth headphones. Learn why they are the perfect choice for music lovers.',
            date: 'December 15, 2024',
            imageUrl: 'bl4.jpg', // Placeholder image
        },
        {
            id: 4,
            title: 'Exclusive Offer: Buy One, Get One Free on Select Items!',
            excerpt: 'Take advantage of our exclusive BOGO deal and stock up on your favorite products. Limited time offer!',
            date: 'December 10, 2024',
            imageUrl: 'bl1.jpg', // Placeholder image
        },
        {
            id: 5,
            title: 'New Arrivals: Check Out Our Latest Product Lineup',
            excerpt: 'Our newest products have arrived! Explore our fresh lineup of gadgets, accessories, and home essentials now.',
            date: 'December 8, 2024',
            imageUrl: 'bl5.jpg', // Placeholder image
        },
        {
            id: 6,
            title: '5 Ways to Save Big During Our Seasonal Sales',
            excerpt: 'Learn how to maximize your savings during our seasonal sales with these expert shopping tips!',
            date: 'December 5, 2024',
            imageUrl: 'bl8.jpg', // Placeholder image
        },
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-8">Sales & Product Updates</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                    >
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-110"
                        />
                        <h2 className="text-2xl font-semibold mb-4 hover:text-blue-600 transition-colors duration-300">
                            {post.title}
                        </h2>
                        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                        <p className="text-gray-700 mb-4">{post.excerpt}</p>
                        <button className="text-blue-500 font-semibold hover:text-blue-700 focus:outline-none transition-colors duration-300">
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
