import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Marina Costa",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Ricardo foi excepcional durante todo o processo de compra do meu apartamento. Sua dedicação e conhecimento do mercado fizeram toda a diferença. Recomendo sem hesitação!",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Profissional exemplar! Ricardo me ajudou a encontrar o imóvel perfeito para investimento. Sua análise de mercado é precisa e o atendimento é de primeira classe.",
      rating: 5
    },
    {
      name: "Ana Beatriz Santos",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Experiência incrível! Ricardo demonstrou profissionalismo ímpar e me acompanhou em cada etapa da venda. Conseguiu o melhor preço e prazo para meu imóvel.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Não poderia ter escolhido melhor corretor! Ricardo é confiável, dedicado e sempre disponível. Vendeu minha casa em tempo recorde pelo valor que eu esperava.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-850 text-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que dizem <span className="text-gold">meus clientes</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A satisfação dos meus clientes é minha maior conquista. Veja alguns depoimentos de quem já confiou em meu trabalho.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className={`bg-white text-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-700 ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'}`}>
            <div className="flex justify-center mb-6">
              <Quote className="text-gold w-12 h-12" />
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <Star key={index} className="text-gold w-6 h-6 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-4 border-gold mr-4 object-cover"
              />
              <div className="text-left">
                <h4 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gold hover:bg-gold-dark text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gold hover:bg-gold-dark text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentTestimonial === index 
                  ? 'bg-gold scale-125' 
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Thumbnails - Desktop Only */}
        <div className="hidden lg:flex justify-center mt-12 space-x-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`flex items-center p-3 rounded-2xl transition-all duration-300 ${
                currentTestimonial === index 
                  ? 'bg-gold text-black' 
                  : 'bg-gray-750 hover:bg-gray-700'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div className="text-left">
                <p className="font-medium text-sm">{testimonial.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;