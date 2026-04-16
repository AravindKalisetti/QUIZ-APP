import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserByAdmin } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const UserdetailForAdmin = (props) => {
  const dispatch = useDispatch();

  // Filter out placeholder names and sort by Points
  const sortedUsers = [...props.data]
    .filter(u => u.name !== "John Roe" && u.name !== "John Doe")
    .sort((a, b) => (b.Points || 0) - (a.Points || 0));

  const DeleteUser = (id) => {
    if (id) {
      dispatch(deleteUserByAdmin(id));
      toast("User successfully removed", { type: "success" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <div className="glass-card p-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-black text-white">Leaderboard</h1>
            <p className="text-slate-400 mt-1">Ranking based on total quiz points</p>
          </div>
          <div className="px-4 py-2 bg-indigo-500/20 rounded-full border border-indigo-500/30">
            <span className="text-indigo-400 font-bold">{sortedUsers.length} Active Users</span>
          </div>
        </div>

        <div className="space-y-4">
          {sortedUsers.map((user, index) => (
            <div 
              key={user._id}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-indigo-500/50 transition-all group"
            >
              <div className="flex items-center space-x-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-inner
                  ${index === 0 ? "bg-amber-400 text-amber-950" : 
                    index === 1 ? "bg-slate-300 text-slate-900" : 
                    index === 2 ? "bg-orange-400 text-orange-950" : 
                    "bg-slate-800 text-slate-400"}`}
                >
                  {index + 1}
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 overflow-hidden bg-slate-800 flex items-center justify-center">
                    <img
                      alt="avatar"
                      src={user.avatar || "https://api.dicebear.com/7.x/pixel-art/svg?seed=" + user.name}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {user.name}
                    </h3>
                    <p className="text-sm text-slate-400 uppercase tracking-tighter">{user.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-right">
                  <p className="text-2xl font-black text-white">{user.Points || 0}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Points</p>
                </div>
                
                <button
                  onClick={() => DeleteUser(user._id)}
                  className="p-3 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  title="Remove User"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {sortedUsers.length === 0 && (
            <div className="text-center py-20 bg-slate-900/20 rounded-2xl border border-dashed border-white/10">
              <p className="text-slate-500 italic">No rankings available yet</p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};
