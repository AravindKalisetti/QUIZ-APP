import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserDataFromBackend } from "../Redux/action.js";
import { ToastContainer } from "react-toastify";

export const LeaderboardPage = () => {
    const allUsers = useSelector((state) => state.mernQuize.Alluser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUserDataFromBackend());
    }, [dispatch]);

    const sortedUsers = [...allUsers]
        .filter(u => u.name !== "John Roe" && u.name !== "John Doe")
        .sort((a, b) => (b.Points || 0) - (a.Points || 0));

    return (
        <div className="min-h-[85vh] py-12 px-4 animate-fade-in relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-white tracking-widest uppercase italic bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-white to-amber-400 animate-pulse">
                        Hall of Fame
                    </h1>
                    <div className="w-24 h-1.5 bg-indigo-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                </div>

                <div className="glass-card overflow-hidden border-white/10">
                    <div className="bg-slate-950/40 p-6 flex items-center justify-between border-b border-white/5">
                        <span className="text-xs font-black uppercase text-slate-500 tracking-[0.2em]">Rank & Warrior</span>
                        <span className="text-xs font-black uppercase text-slate-500 tracking-[0.2em]">Power Level</span>
                    </div>

                    <div className="divide-y divide-white/5">
                        {sortedUsers.map((user, index) => (
                            <div 
                                key={user._id}
                                className={`flex items-center justify-between p-6 hover:bg-white/5 transition-colors group relative
                                    ${index === 0 ? "bg-amber-400/5 shadow-inner" : ""}`}
                            >
                                {index === 0 && (
                                    <div className="absolute top-0 left-0 w-1 h-full bg-amber-400 shadow-[2px_0_10px_rgba(251,191,36,0.4)]" />
                                )}
                                
                                <div className="flex items-center space-x-8">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg
                                        ${index === 0 ? "bg-amber-400 text-amber-950 scale-110" : 
                                          index === 1 ? "bg-slate-300 text-slate-900" : 
                                          index === 2 ? "bg-orange-500 text-orange-950" : 
                                          "text-slate-500 bg-slate-900/50"}`}
                                    >
                                        #{index + 1}
                                    </div>
                                    
                                    <div className="flex items-center space-x-6">
                                        <div className="relative">
                                            <div className={`absolute -inset-1 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity
                                                ${index === 0 ? "bg-amber-400" : "bg-indigo-500"}`} />
                                            <div className="relative w-14 h-14 rounded-full border border-white/10 overflow-hidden bg-slate-900 flex items-center justify-center">
                                                <img
                                                  alt="avatar"
                                                  src={user.avatar || `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${user.name}`}
                                                  className="w-12 h-12 object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-black ${index === 0 ? "text-amber-400" : "text-white"}`}>
                                                {user.name}
                                            </h3>
                                            <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-300">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-12">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-sm font-bold text-white">{user.totalQuizzes || 0}</p>
                                        <p className="text-[10px] uppercase font-black text-slate-600 tracking-widest">Trials</p>
                                    </div>
                                    <div className="text-right hidden sm:block">
                                        <p className="text-sm font-bold text-white">{Math.floor((user.totalTime || 0) / 60)}m {user.totalTime % 60}s</p>
                                        <p className="text-[10px] uppercase font-black text-slate-600 tracking-widest">Total Time</p>
                                    </div>
                                    <div className="text-right min-w-[80px]">
                                        <div className="flex items-center justify-end space-x-2">
                                            <span className={`text-3xl font-black ${index === 0 ? "text-amber-400" : "text-white"}`}>
                                                {user.Points || 0}
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase text-slate-600 tracking-[0.3em]">Points</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {sortedUsers.length === 0 && (
                        <div className="py-24 text-center">
                            <p className="text-slate-500 italic text-lg">The Hall of Fame is waiting for its first warrior...</p>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer theme="dark" />
        </div>
    );
};
