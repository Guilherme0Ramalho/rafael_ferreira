import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Hero />
      <About />
      <Partners />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;