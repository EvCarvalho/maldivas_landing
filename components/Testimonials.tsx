import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { TESTIMONIALS, COMPANY_INFO } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-60 translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Depoimentos</span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                  O que dizem as Musas do <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">{COMPANY_INFO.name}</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Confira a experiência real de quem já passou pelas mãos da nossa especialista e garantiu o bronze dos sonhos.
                </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 flex flex-col relative group"
                    >
                        <Quote className="absolute top-6 right-6 text-amber-200 w-10 h-10 transform group-hover:scale-110 transition-transform duration-300" />
                        
                        <div className="flex gap-1 mb-6 text-amber-500">
                             {[...Array(testimonial.rating)].map((_, i) => (
                                 <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />
                             ))}
                        </div>

                        <p className="text-gray-700 italic mb-8 leading-relaxed relative z-10 flex-grow">
                            "{testimonial.content}"
                        </p>

                        <div className="mt-auto flex items-center gap-4 border-t border-gray-200 pt-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-amber-500 rounded-full blur-sm opacity-20"></div>
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm relative z-10"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-base leading-tight">{testimonial.name}</h4>
                                {testimonial.role && (
                                    <p className="text-xs text-amber-600 uppercase tracking-wide font-medium mt-1">{testimonial.role}</p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;