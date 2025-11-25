import React from 'react';
import { Sparkles, Star } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Urgency: React.FC = () => {
    const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Oi! Quero garantir minha vaga exclusiva para o bronze.`;

  return (
    <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 relative overflow-hidden text-white">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

        <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
                <Sparkles size={18} className="text-yellow-300" />
                <span className="font-semibold tracking-wide text-sm">VAGAS LIMITADAS PARA ESTA SEMANA</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                Não deixe sua autoestima para depois. <br/>
                <span className="text-yellow-300">Você merece brilhar agora.</span>
            </h2>

            <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                Nossa agenda costuma lotar rapidamente, especialmente aos finais de semana e feriados. 
                Garanta seu horário exclusivo e evite filas de espera.
            </p>

            <div className="flex flex-col items-center">
                <a 
                    href={whatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-amber-700 font-bold text-xl px-10 py-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] hover:scale-105 transition-all duration-300"
                >
                    Quero Garantir Minha Vaga
                </a>
                <p className="mt-4 text-sm text-amber-200 opacity-80">
                    <Star className="inline w-4 h-4 mr-1 mb-1" />
                    Mais de 500 clientes satisfeitas
                </p>
            </div>
        </div>
    </section>
  );
};

export default Urgency;