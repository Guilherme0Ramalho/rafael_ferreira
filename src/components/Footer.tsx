import React from 'react';
import { Mail, Instagram, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telefone",
      value: "(11) 94700-3193",
      href: "tel:+5511947003193"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "(11) 94700-3193",
      href: "https://wa.me/5511947003193"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "E-mail",
      value: "ricardo@ricardosilva.com.br",
      href: "mailto:ricardo@ricardosilva.com.br"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@imobi.ferreira",
      href: "https://instagram.com/imobi.ferreira"
    }
  ];

  const businessInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "São Paulo - SP | Atendimento em toda Grande SP"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Segunda à Sexta: 8h às 20h | Sábados: 8h às 16h"
    }
  ];

  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
              Rafael Ferreira
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Seu parceiro de confiança no mercado imobiliário. Transformando sonhos em endereços há mais de 10 anos.
            </p>
            <div className="space-y-3">
              {businessInfo.map((info, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="text-gold mr-3">{info.icon}</div>
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Grid */}
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Entre em <span className="text-gold">Contato</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="bg-gray-850 p-6 rounded-2xl hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-gold group-hover:animate-bounce-gentle transition-all duration-300 mr-4">
                      {contact.icon}
                    </div>
                    <h5 className="font-semibold text-lg group-hover:text-gold transition-colors duration-300">
                      {contact.label}
                    </h5>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {contact.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gold to-gold-dark text-black p-8 rounded-3xl text-center mb-12">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para encontrar seu próximo imóvel?
          </h4>
          <p className="text-lg mb-6 opacity-90">
            Vamos conversar sobre seus objetivos e encontrar a oportunidade perfeita para você.
          </p>
          <a
            href="https://wa.me/5511947003193
            "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale comigo no WhatsApp
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Rafael Ferreira - Corretor de Imóveis. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              CRECI: 123456-F | Desenvolvido com excelência para resultados excepcionais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;