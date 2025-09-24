import React, { useEffect, useState } from 'react';
import { Home, Building, TrendingUp, Users, Award, Shield } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const competencies = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Imóveis Residenciais",
      description: "Especialista em apartamentos e casas de alto padrão"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Imóveis Comerciais",
      description: "Consultoria para escritórios, lojas e investimentos"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Análise de Mercado",
      description: "Avaliação precisa e estratégias de valorização"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimento VIP",
      description: "Acompanhamento personalizado em todo processo"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experiência Premium",
      description: "Mais de 10 anos no mercado imobiliário de luxo"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Jurídica",
      description: "Assessoria completa para transações seguras"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre <span className="text-gold">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Com mais de uma década de experiência no mercado imobiliário, dedico-me a conectar pessoas aos seus imóveis dos sonhos. 
            Minha paixão é transformar cada negociação em uma experiência única e bem-sucedida, oferecendo o mais alto padrão de 
            atendimento e expertise no setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-gold mb-6 group-hover:animate-bounce-gentle transition-all duration-300">
                {competency.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-gold transition-colors duration-300">
                {competency.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {competency.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-gold to-gold-dark text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Mais de 500 imóveis vendidos
            </h3>
            <p className="text-lg opacity-90">
              Construindo relacionamentos duradouros baseados em confiança e resultados excepcionais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;