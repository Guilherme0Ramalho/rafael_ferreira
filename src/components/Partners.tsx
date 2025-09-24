import React, { useEffect, useState } from 'react';

const Partners: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('partners');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: "Plano & Plano", logo: "/assets/plano_e_plano.webp" },
    { name: "Tenda", logo: "/assets/tenda.png" },
    { name: "Vivaz", logo: "public/assets/vivaz.png" },
    { name: "Century 21", logo: "https://via.placeholder.com/200x80/d4af37/ffffff?text=CENTURY21" },
    { name: "Keller Williams", logo: "https://via.placeholder.com/200x80/d4af37/ffffff?text=KELLER" },
    { name: "Sotheby's Realty", logo: "https://via.placeholder.com/200x80/d4af37/ffffff?text=SOTHEBYS" },
    { name: "JLL Brasil", logo: "https://via.placeholder.com/200x80/d4af37/ffffff?text=JLL" },
    { name: "Cushman & Wakefield", logo: "https://via.placeholder.com/200x80/d4af37/ffffff?text=CUSHMAN" },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 4));
    }, 3000);

    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Corretoras <span className="text-gold">Parceiras</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalho em parceria com as principais corretoras do mercado, garantindo acesso aos melhores imóveis e oportunidades.
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 4) }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-4 gap-8">
                  {partners.slice(slideIndex * 4, slideIndex * 4 + 4).map((partner, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {partners.slice(0, 6).map((partner, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="hidden md:flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(partners.length / 4) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-gold scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;