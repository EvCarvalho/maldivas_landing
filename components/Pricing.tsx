import React from 'react';
import { Check, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Pricing: React.FC = () => {
  const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Quero agendar o pacote completo por R$ 99,00.`;

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* Left Side: Image/Brand */}
          <div className="md:w-2/5 bg-gray-900 relative min-h-[300px] md:min-h-full">
            <img 
              src="/images/pricing-background.jpg" 
              alt="Relaxing Spa" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white z-10">
              <h3 className="text-2xl font-serif font-bold mb-2">Espaço Maldivas</h3>
              <p className="text-amber-300 font-medium">Sua melhor versão.</p>
            </div>
          </div>

          {/* Right Side: Pricing Content */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-widest mb-6 w-max">
              Oferta Especial
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Pacote Bronze Completo</h2>
            <p className="text-gray-500 mb-8">Tudo incluso: montagem, produtos, exposição e banho de lua.</p>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold text-amber-600">{COMPANY_INFO.price}</span>
              <span className="ml-2 text-gray-400 text-lg">/sessão</span>
            </div>

            <ul className="space-y-4 mb-10">
              {['Biquíni de Fita Personalizado', 'Acelerador Melanina Bronze (ANVISA)', 'Banho de Lua', 'Hidratação Pós-Sol', 'Sucos e Água inclusos'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Agendar Agora
              </a>
              <p className="text-center text-gray-500 text-sm">
                Pagamento via Pix, Dinheiro ou Cartão (até 2x sem juros)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;