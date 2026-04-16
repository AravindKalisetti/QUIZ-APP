import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Flashcards = () => {
    const flashcardData = [
        { q: "What is JSX?", a: "HTML-like syntax used in React to describe the UI.", category: "React" },
        { q: "What is a Closure?", a: "A function that remembers its outer lexical scope.", category: "JavaScript" },
        { q: "What is a Middleware?", a: "Code that sits between the request and response objects in Express.", category: "Node.js" },
        { q: "What is an Aggregation?", a: "Processing data in MongoDB by passing documents through stages.", category: "MongoDB" },
        { q: "Virtual DOM vs Real DOM?", a: "React uses VDOM to minimize heavy Real DOM manipulations via Diffing.", category: "React" },
        { q: "Semantics in HTML?", a: "Using tags that describe their meaning to both browser and developer.", category: "HTML" },
        { q: "Flexbox vs Grid?", a: "Flexbox is 1D (rows/cols) while Grid is 2D (rows and cols).", category: "CSS" },
        { q: "useState Hook?", a: "A hook that allows functional components to manage local state.", category: "React" },
    ];

    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const nextCard = () => {
        setIsFlipped(false);
        setCurrentCard((prev) => (prev + 1) % flashcardData.length);
    };

    const prevCard = () => {
        setIsFlipped(false);
        setCurrentCard((prev) => (prev - 1 + flashcardData.length) % flashcardData.length);
    };

    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center py-12 px-4 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-black text-white mb-2">Skill Sharpener</h1>
                <p className="text-slate-400">Quick-fire MERN concepts for elite developers</p>
            </div>

            <div className="w-full max-w-lg perspective-1000">
                <div 
                    className={`relative w-full h-[400px] transition-transform duration-700 preserve-3d cursor-pointer active:scale-95
                        ${isFlipped ? "rotate-y-180" : ""}`}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {/* Front side */}
                    <div className="absolute inset-0 backface-hidden glass-card p-10 flex flex-col items-center justify-center text-center border-indigo-500/30">
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                            {flashcardData[currentCard].category}
                        </span>
                        <h2 className="text-3xl font-black text-white leading-tight">
                            {flashcardData[currentCard].q}
                        </h2>
                        <p className="mt-12 text-slate-500 text-xs font-bold uppercase tracking-widest animate-pulse">
                            Click to reveal answer
                        </p>
                    </div>

                    {/* Back side */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card p-10 flex flex-col items-center justify-center text-center border-emerald-500/30">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                            Knowledge Verified
                        </span>
                        <h2 className="text-2xl font-bold text-white leading-relaxed">
                            {flashcardData[currentCard].a}
                        </h2>
                        <p className="mt-12 text-slate-500 text-xs font-bold uppercase tracking-widest">
                            Click to see question
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex items-center space-x-8">
                <button 
                    onClick={prevCard} 
                    className="p-4 bg-slate-900/50 hover:bg-white text-slate-400 hover:text-slate-900 rounded-2xl border border-white/5 transition-all"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <span className="text-xl font-black text-white">
                    {currentCard + 1} <span className="text-slate-600">/ {flashcardData.length}</span>
                </span>

                <button 
                    onClick={nextCard} 
                    className="p-4 bg-slate-900/50 hover:bg-white text-slate-400 hover:text-slate-900 rounded-2xl border border-white/5 transition-all"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="mt-16">
                <Link to="/guide" className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                    Back to Learning Guide
                </Link>
            </div>
        </div>
    );
};
