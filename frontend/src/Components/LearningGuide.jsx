import React from "react";
import { Link } from "react-router-dom";

export const LearningGuide = () => {
  const roadmapSteps = [
    {
      title: "Fundamentals (HTML & CSS)",
      description: "Learn building blocks of layout, semantic HTML, CSS Grid, Flexbox, and responsive design.",
      keyPoints: ["Semantic HTML5", "Modern CSS Layouts", "Responsive Web Design", "Accessibility Basics"],
      color: "from-orange-500 to-red-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Intermediate (JavaScript ES6+)",
      description: "Master the core logic: Async/Await, Closures, DOM manipulation, and modern syntax.",
      keyPoints: ["Async JS & Fetch API", "Closures & Scope", "Higher-Order Functions", "Object Destruction"],
      color: "from-yellow-400 to-orange-400",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Frontend (React & Ecosystem)",
      description: "Build dynamic UIs using Hooks, Context API, Redux for state management, and React Router.",
      keyPoints: ["React Hooks (useEffect, useState)", "State management with Redux", "Component Lifecycle", "Performance Optimization"],
      color: "from-blue-400 to-indigo-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Backend (Node.js & Express)",
      description: "Build robust REST APIs, handle routing, middleware, and backend logic with Node.js.",
      keyPoints: ["RESTful API Architecture", "Middleware Implementation", "Auth with JWT", "Error Handling"],
      color: "from-green-400 to-emerald-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-7 0V4m0 16v-4" />
        </svg>
      )
    },
    {
      title: "Database (MongoDB & Mongoose)",
      description: "Learn NoSQL database concepts, data modeling, and Mongoose for schema management.",
      keyPoints: ["NoSQL Schema Design", "Aggregation Pipeline", "Mongoose Controllers", "Data Validation"],
      color: "from-teal-400 to-green-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">
          The <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Fullstack Mastery</span> Guide
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Your interactive roadmap to becoming a world-class MERN developer. Master these steps and dominate the quiz!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative">
        {/* Connection Line (Hidden on mobile/tablet) */}
        <div className="hidden xl:block absolute top-[150px] left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 z-0" />

        {roadmapSteps.map((step, index) => (
          <div key={index} className="relative z-10 group flex flex-col h-full">
            {/* Step Number Badge */}
            <div className="flex flex-col items-center mb-8 shrink-0">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white">
                  {step.icon}
                </div>
              </div>
              <div className="mt-4 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-slate-400 uppercase tracking-widest">
                Step {index + 1}
              </div>
            </div>

            {/* Content Card */}
            <div className="glass-card p-6 flex-grow flex flex-col border-white/5 hover:border-indigo-500/50 transition-all">
              <h2 className="text-lg font-black text-white mb-3 leading-tight shrink-0">{step.title}</h2>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-grow">
                {step.description}
              </p>
              
              <div className="space-y-2 mt-auto pt-4 border-t border-white/5">
                <p className="text-[10px] font-black uppercase text-indigo-500 tracking-wider">Key Objectives</p>
                {step.keyPoints.map((point, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                    <div className="w-1 h-1 rounded-full bg-indigo-500" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Course Mastery Tips Section */}
      <div className="mt-24 p-10 glass-card bg-indigo-500/5 border-indigo-500/20">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-indigo-500 rounded-2xl shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75V19a2.25 2.25 0 01-4.5 0v-.25c0-.438-.204-.845-.548-1.153l-.547-.547z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-black text-white">Course Mastery Tips</h2>
            <p className="text-slate-400">Expert strategies to dominate the quizzes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-950/40 rounded-2xl border border-white/5 group hover:border-indigo-500/40 transition-colors">
            <h3 className="font-black text-white mb-2 group-hover:text-amber-400 transition-colors uppercase text-sm tracking-widest">01. Master Async Flow</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Modern JavaScript is heavily async. Spend extra time on Promises and Async/Await before attempting the JS quiz.</p>
          </div>
          <div className="p-6 bg-slate-950/40 rounded-2xl border border-white/5 group hover:border-indigo-500/40 transition-colors">
            <h3 className="font-black text-white mb-2 group-hover:text-amber-400 transition-colors uppercase text-sm tracking-widest">02. React Hook Rules</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Always follow the Rules of Hooks. Most React questions focus on Dependency Arrays in useEffect and state synchronization.</p>
          </div>
          <div className="p-6 bg-slate-950/40 rounded-2xl border border-white/5 group hover:border-indigo-500/40 transition-colors">
            <h3 className="font-black text-white mb-2 group-hover:text-amber-400 transition-colors uppercase text-sm tracking-widest">03. MongoDB Modeling</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Learn when to 'Embed' vs 'Reference'. NoSQL schema design is the most common hurdle for new MERN developers.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-slate-500 italic mb-4">Master these core topics and dominate the leaderboards!</p>
        <Link to="/flashcards">
          <button className="btn-secondary py-3 px-8 text-sm font-bold uppercase tracking-widest">
            Try Quick Flashcards
          </button>
        </Link>
      </div>
    </div>
  );
};
