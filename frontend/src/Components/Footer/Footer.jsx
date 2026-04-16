import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-950/80 backdrop-blur-md border-t border-white/5 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75V19a2.25 2.25 0 01-4.5 0v-.25c0-.438-.204-.845-.548-1.153l-.547-.547z" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-tight text-white uppercase italic">
              QUIZ<span className="text-indigo-500 tracking-tighter">LAB</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs mx-auto md:mx-0 font-medium">
            Master the MERN stack through interactive challenges and a professional roadmap.
          </p>
        </div>
        
        <div className="flex flex-col md:items-end justify-center">
          <h3 className="text-xs font-black uppercase text-indigo-500 tracking-[0.3em] mb-4">Quick Navigation</h3>
          <div className="flex items-center justify-center space-x-8">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Quizzes</Link>
            <Link to="/leaderboard" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Hall of Fame</Link>
            <Link to="/guide" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Guide</Link>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase text-slate-700 tracking-[0.5em]">
          &copy; 2024 QUIZLAB INTERACTIVE SYSTEM &bull; NO PASSION, NO GAIN
        </p>
      </div>
    </footer>
  );
};
