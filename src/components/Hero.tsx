import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content */}
      <div className={`relative z-10 text-center text-white px-6 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}>
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Ricardo Silva"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gold shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -inset-4 rounded-full bg-gold opacity-20 animate-pulse-slow"></div>
          </div>
        </div>
        
        {/* Name and Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
          Ricardo Silva
        </h1>
        
        <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Transformando sonhos em realidade no mercado imobiliário de luxo
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Conheça meu trabalho
          </button>
          <a
            href="#contact"
            className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Entre em contato
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-gentle hover:text-gold transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;