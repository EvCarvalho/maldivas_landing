import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full border border-amber-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Pedido Iniciado!</h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Obrigada por escolher o Espaço Maldivas! <br/>
          Caso você tenha finalizado o pagamento, por favor envie o comprovante para nosso e-mail ou WhatsApp para confirmarmos seu horário imediatamente.
        </p>

        <div className="bg-amber-50 p-4 rounded-xl mb-8 text-left">
           <p className="text-sm text-amber-800 font-semibold mb-2">Próximos passos:</p>
           <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
             <li>Aguarde a confirmação do pagamento.</li>
             <li>Envie o comprovante se pagou via Pix.</li>
             <li>Compareça com 10 minutos de antecedência.</li>
           </ol>
        </div>

        <div className="flex flex-col gap-3">
             <a 
               href={`mailto:contato@espacomaldivas.com.br`}
               className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors"
             >
                Enviar E-mail
             </a>
             <Link 
               to="/"
               className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-amber-600 font-medium transition-colors py-2"
             >
                <ArrowLeft size={18} />
                Voltar ao Início
             </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;