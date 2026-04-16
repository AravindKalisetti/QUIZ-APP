import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Profile = () => {
  const userName = useSelector((state) => state.mernQuize.userName);
  const allUsers = useSelector((state) => state.mernQuize.Alluser);
  
  // Find current user's stats
  const currentUser = allUsers.find(u => u.name === userName) || {};

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Welcome Card */}
        <div className="lg:col-span-8 glass-card p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <h1 className="text-6xl font-black text-white mb-6 tracking-tighter">
              Welcome back, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                {userName}!
              </span> 👋
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
            </p>
          </div>

          <div className="mt-12 flex items-center space-x-6 relative z-10">
            <Link to="/">
              <button className="btn-primary py-4 px-12 text-lg shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                Launch New Quiz
              </button>
            </Link>
            <Link to="/leaderboard" className="text-slate-500 hover:text-white font-bold uppercase tracking-widest text-sm transition-colors">
              View Rankings
            </Link>
          </div>
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="glass-card p-8 flex-grow border-indigo-500/20">
            <h3 className="text-sm font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">Total Mastery</h3>
            <div className="flex items-end space-x-2">
              <span className="text-6xl font-black text-white leading-none">{currentUser.Points || 0}</span>
              <span className="text-xl font-bold text-slate-600 mb-1">PTS</span>
            </div>
            <div className="mt-4 h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000"
                style={{ width: `${Math.min(100, (currentUser.Points || 0) / 10)}%` }}
              />
            </div>
          </div>

          <div className="glass-card p-8 border-white/5">
            <h3 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Quiz Trials</h3>
            <p className="text-4xl font-black text-white">{currentUser.totalQuizzes || 0}</p>
            <p className="text-xs text-slate-500 mt-2 font-medium italic">Your consistency is your strength!</p>
          </div>
        </div>

      </div>
    </div>
  );
};
