
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Smartphone, Bike, Car, Gift, Award, Sparkles, PartyPopper, ShieldCheck } from 'lucide-react';

interface PrizeWinningScreenProps {
  onContinue: () => void;
}

const PrizeWinningScreen: React.FC<PrizeWinningScreenProps> = ({ onContinue }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const prizes = [
    {
      category: "Citizen users",
      reward: "Vivo Y100 Mobile",
      urduDescription: "پہلے 100 سٹیزن صارفین کی قرعہ اندازی ہوگی اور ایک خوش نصیب کو موبائل ملے گا۔"
    },
    {
      category: "Bike partner users",
      reward: "Honda 70 Motorcycle",
      urduDescription: "پہلے 100 بائیک پارٹنرز کی قرعہ اندازی ہوگی اور ایک خوش نصیب کو بائیک ملے گی۔"
    },
    {
      category: "Rikshaw partner users",
      reward: "Auto Rikshaw",
      urduDescription: "پہلے 100 رکشہ پارٹنرز کی قرعہ اندازی ہوگی اور ایک خوش نصیب کو آٹو رکشہ ملے گا۔"
    },
    {
      category: "Delivery partner users",
      reward: "King Hero Motorcycle",
      urduDescription: "پہلے 100 ڈیلیوری پارٹنرز کی قرعہ اندازی ہوگی اور ایک خوش نصیب کو بائیک ملے گی۔"
    },
    {
      category: "First 100 Early Birds",
      reward: "Smart Watch Elite",
      urduDescription: "پہلے 100 ارلی برڈز کی قرعہ اندازی ہوگی اور ایک خوش نصیب کو اسمارٹ واچ ملے گی۔"
    }
  ];

  const showerItems = ["🎉", "🥳", "🎁", "⭐", "✨", "📱", "🏍️", "🛺", "🎈", "🎊", "💰"];

  useEffect(() => {
    // Trigger celebration
    setShowCelebration(true);

    // Auto-scroll effect to hint at more content
    const timer = setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          top: 150,
          behavior: 'smooth'
        });
        
        // Return slightly after a delay
        setTimeout(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }, 1500);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#0B0B0D] text-white relative overflow-hidden font-sans select-none">
      {/* Celebration Shower Effect */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none z-[60]">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
                top: '-60px'
              }}
            >
              {showerItems[i % showerItems.length]}
            </div>
          ))}
        </div>
      )}

      {/* Soft Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[#c1ff22]/[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c1ff22]/[0.03] blur-[100px] rounded-full pointer-events-none" />

      {/* Main Scrollable Content */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto no-scrollbar pt-12 px-6 pb-48 relative z-10"
      >
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-12 animate-in fade-in duration-700">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-[#c1ff22] blur-2xl opacity-20 animate-pulse" />
            <div className="relative bg-[#c1ff22] w-12 h-12 rounded-2xl flex items-center justify-center text-black font-black italic transform -skew-x-6 text-2xl shadow-xl">e</div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c1ff22]/20 bg-[#c1ff22]/5 mb-6">
            <TrophyIcon className="w-3 h-3 text-[#c1ff22]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c1ff22]">Exclusive Lucky Draw</span>
          </div>

          <h2 className="text-[20px] font-medium text-white/90 tracking-tight mb-2">Launch Reward Campaign</h2>
          <div className="flex flex-col items-center relative">
            <span className="text-[72px] font-bold leading-none tracking-tighter text-white">100</span>
            <div className="h-[3px] w-14 bg-[#c1ff22] mt-1 rounded-full shadow-[0_0_15px_#c1ff22]" />
            <Sparkles className="absolute -right-4 top-4 w-6 h-6 text-[#c1ff22] animate-bounce opacity-40" />
          </div>
          
          <p className="text-zinc-400 text-[13px] font-medium max-w-[240px] mt-8 leading-relaxed italic">
            First 100 verified users qualify for <br/> premium prize draw.
          </p>
        </header>

        {/* Prize List Section */}
        <section className="space-y-8 animate-in slide-in-from-bottom-6 duration-1000 delay-300">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-zinc-500 text-[14px] font-bold uppercase tracking-[2px]">Available Rewards</h3>
            <PartyPopper className="w-4 h-4 text-[#c1ff22] opacity-30" />
          </div>
          
          <div className="space-y-4">
            {prizes.map((prize, idx) => (
              <div 
                key={idx}
                className="group bg-white/[0.03] border border-white/[0.06] rounded-[24px] p-7 flex flex-col justify-center min-h-[160px] transition-all hover:bg-white/[0.06] hover:border-[#c1ff22]/20 active:scale-[0.98] relative overflow-hidden"
              >
                {/* Subtle Background Icon Decoration */}
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  <Award className="w-24 h-24 text-white" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2.5">
                  {prize.category}
                </span>
                <h4 className="text-[22px] font-bold text-white mb-2 tracking-tight">
                  {prize.reward}
                </h4>
                
                {/* Urdu Description added here */}
                <p className="text-[12px] font-medium text-zinc-300 leading-relaxed italic mb-4" dir="rtl">
                  {prize.urduDescription}
                </p>

                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#c1ff22] rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-[#c1ff22] uppercase tracking-wide">
                    Lucky Draw Eligibility
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Element */}
        <div className="mt-16 flex flex-col items-center pb-12">
          <div className="w-16 h-[1px] bg-white/10 mb-6" />
          <div className="flex items-center gap-2 text-zinc-600 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <p className="text-[11px] font-medium uppercase tracking-widest">
              Transparent & Official
            </p>
          </div>
          <p className="text-[10px] text-zinc-700 text-center uppercase tracking-widest">
            Verified eDrive City Campaign 2026
          </p>
        </div>
      </div>

      {/* Fixed Bottom CTA Section */}
      <div className="fixed bottom-0 left-0 right-0 p-6 pt-12 pb-12 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/98 to-transparent backdrop-blur-[4px] z-50">
        <button 
          onClick={onContinue}
          className="w-full h-[62px] bg-gradient-to-r from-[#c1ff22] to-[#b2eb1e] text-black rounded-[32px] font-black text-[16px] uppercase tracking-[1.5px] shadow-[0_20px_50px_rgba(193,255,34,0.25)] flex items-center justify-center gap-3 transition-all hover:brightness-110 active:scale-[0.97]"
        >
          <span>PROCEED TO JOIN</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5px]" />
        </button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// Internal Helper Icon
const TrophyIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

export default PrizeWinningScreen;
