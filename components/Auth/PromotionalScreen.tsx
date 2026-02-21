
import React from 'react';
import { ArrowRight, Wallet, Sparkles, TrendingUp, Gift, Award } from 'lucide-react';

interface PromotionalScreenProps {
  onContinue: () => void;
}

const PromotionalScreen: React.FC<PromotionalScreenProps> = ({ onContinue }) => {
  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] text-white p-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#c1ff22]/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-[#c1ff22]/5 blur-[100px] rounded-full" />

      <div className="flex-1 flex flex-col items-center justify-center space-y-12 animate-in fade-in duration-700">
        <div className="relative">
           <div className="absolute inset-0 bg-[#c1ff22] blur-3xl opacity-10 animate-pulse" />
           <div className="relative w-24 h-24 bg-zinc-900 rounded-[2.5rem] border-2 border-[#c1ff22]/20 flex items-center justify-center shadow-2xl">
              <Gift className="w-12 h-12 text-[#c1ff22]" />
              <div className="absolute -top-2 -right-2 bg-[#c1ff22] p-2 rounded-xl shadow-lg">
                 <Sparkles className="w-4 h-4 text-black animate-spin duration-[5000ms]" />
              </div>
           </div>
        </div>

        <div className="text-center space-y-8">
           <div className="space-y-4">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none">
                Earn <span className="text-[#c1ff22]">Money</span>
              </h2>
              <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest leading-relaxed px-4">
                You can earn money by joining our <span className="text-white">affiliate program</span>
              </p>
           </div>

           <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[3rem] space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform"><TrendingUp className="w-16 h-16" /></div>
              <p className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.3em]">Referral Reward</p>
              <h3 className="text-5xl font-black text-[#c1ff22] italic tracking-tighter leading-none">
                PKR 100
              </h3>
              <p className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Per Successful Referral</p>
           </div>

           <div className="pt-4">
              <div className="inline-flex items-center gap-3 bg-white/5 px-6 py-2.5 rounded-full border border-white/10">
                 <Award className="w-4 h-4 text-[#c1ff22]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Unlimited Earnings</span>
              </div>
           </div>
        </div>
      </div>

      <div className="space-y-6 pb-8 relative z-10">
        <button 
          onClick={onContinue}
          className="w-full bg-[#c1ff22] text-black py-7 rounded-[2.5rem] font-black text-xl uppercase shadow-[0_20px_50px_rgba(193,255,34,0.3)] flex items-center justify-center gap-4 active:scale-[0.98] transition-all italic tracking-tighter"
        >
          Proceed to Join <ArrowRight className="w-6 h-6" />
        </button>

        <div className="text-center space-y-1">
           <h1 className="text-white text-lg font-black tracking-tighter italic leading-none">
             e<span className="text-[#c1ff22]">Drive</span>
           </h1>
           <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em] italic">Ao Chalen</p>
        </div>
      </div>
    </div>
  );
};

export default PromotionalScreen;
