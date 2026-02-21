
import React, { useState, useEffect } from 'react';

const LOADING_MESSAGES = [
  "Your city app is loading...",
  "Routing to Hafizabad...",
  "Setting up data...",
  "Connecting to city fleet...",
  "Almost there...",
  "Ao Chalen!"
];

const SplashScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const duration = 6000; 
    const intervalTime = 60; 
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    const messageTimer = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % LOADING_MESSAGES.length);
    }, 1000); 

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(193,255,34,0.08)_0%,_transparent_70%)]" />

      {/* Brand Identity - Enhanced visibility now that car is removed */}
      <div className="text-center space-y-6 z-10 animate-in fade-in zoom-in duration-1000">
        <div className="relative inline-block">
           <div className="absolute inset-0 bg-[#c1ff22] blur-3xl opacity-20 animate-pulse" />
           <div className="bg-[#c1ff22] w-24 h-24 rounded-[2rem] flex items-center justify-center text-black font-black italic transform -skew-x-6 text-5xl shadow-[0_20px_50px_rgba(193,255,34,0.3)] relative z-10">e</div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-white text-6xl font-black tracking-tighter italic leading-none">
            e<span className="text-[#c1ff22]">Drive</span>
          </h1>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-white/60 text-xl font-bold uppercase tracking-[0.3em] italic">Hafizabad</h2>
            <div className="h-0.5 w-12 bg-[#c1ff22]/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Progress Container */}
      <div className="absolute bottom-24 w-full px-12 flex flex-col items-center gap-5">
        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] h-4 italic">
          {LOADING_MESSAGES[messageIndex]}
        </p>

        <div className="w-full max-w-xs h-1.5 bg-zinc-900 rounded-full overflow-hidden relative border border-white/5 p-[1px]">
          <div 
            className="h-full bg-[#c1ff22] shadow-[0_0_20px_#c1ff22] transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-zinc-700 text-[11px] font-black tabular-nums tracking-widest">
          {Math.floor(progress)}%
        </span>
      </div>

      <div className="absolute bottom-12 text-zinc-800 text-[9px] font-black uppercase tracking-[0.6em]">
        Official Fleet Console
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
