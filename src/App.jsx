import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  
import Content from './components/Content'; // Import the Content component
import Footer from './components/Footer'; // Import the Footer component
import Contact from './pages/Contact'; // Import the Contact page
import Blog from './pages/Blog'; // Import the Blog page
import Product from './pages/Products'; // Import the Product component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Fixed Header */}
        <div className="content pt-20"> {/* Added padding-top to avoid content being hidden behind the fixed header */}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} /> {/* Added route for Blog */}
            <Route path="/products" element={<Product />} /> {/* Added route for Product */}
          </Routes>
        </div>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
};

export default App;
