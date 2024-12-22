import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]); // State to store all products
    const [loading, setLoading] = useState(true); // State for loading indicator

    // Fetch products from the API
    const fetchProducts = () => {
        setLoading(true); // Set loading to true while fetching
        fetch('https://fakestoreapi.com/products?limit=20') // Fetch exactly 20 products
            .then((response) => response.json())
            .then((data) => {
                setProducts(data); // Set the products data
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    };

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>; // Show loading message while fetching
    }

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className="product-card flex flex-row border border-gray-300 rounded-lg p-4 max-w-xl shadow-md items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-blue-400"
                    >
                        <img src={product.image} alt={product.title} className="w-36 h-auto rounded-md mr-6" />
                        <div className="flex-1 text-left">
                            <h2 className="text-xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300">{product.title}</h2>
                            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                            <p className="text-lg font-bold mb-4">${product.price}</p>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none transition-colors duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
