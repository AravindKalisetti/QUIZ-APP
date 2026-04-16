import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logouthandleraction } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbarnew = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const userName = useSelector((state) => state.mernQuize.userName);
  const adminName = useSelector((state) => state.mernQuize.adminName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logouthandler = () => {
    if (userName !== null) {
      dispatch(Logouthandleraction());
      toast(`${userName} Successfully Logout `, {
        type: "success",
      });
    }
    if (adminName === "Sudhir P Chavhan") {
      toast(`Sudhir P Chavhan Successfully Logout `, {
        type: "success",
      });
      dispatch(Logouthandleraction());
    }
    navigate("/");
  };

  const profilenavigate = () => {
    navigate("/profile");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              QUIZ<span className="text-indigo-500">LAB</span>
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
            <Link to="/guide" className="nav-link">Learning Guide</Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            {userName !== null || adminName !== null ? (
              <div className="flex items-center space-x-4">
                <div onClick={profilenavigate} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-white leading-tight">{userName || adminName}</p>
                    <p className="text-xs text-slate-400">View Profile</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <button 
                  onClick={logouthandler}
                  className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                  title="Logout"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn-primary">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </nav>
  );
};
