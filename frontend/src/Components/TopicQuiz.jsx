import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TopicQuiz = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const navigate = useNavigate();
  const name = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Ready to test your skills?
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Choose a topic below to start your quiz. Each quiz is designed to challenge your understanding and help you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { id: "htmlData", name: "HTML", color: "from-orange-500/20", img: "/html-5.gif" },
          { id: "cssData", name: "CSS", color: "from-blue-500/20", img: "./css3.gif" },
          { id: "javaScriptData", name: "JavaScript", color: "from-yellow-500/20", img: "./javascript.gif" },
          { id: "reactData", name: "React", color: "from-cyan-500/20", img: "./react.gif" },
          { id: "reduxData", name: "Redux", color: "from-purple-500/20", img: "./redux.svg" },
          { id: "mongodbData", name: "MongoDb", color: "from-green-500/20", img: "./mongo.gif" },
        ].map((topic) => (
          <Link 
            key={topic.id}
            to={userId ? `/quiz/${topic.id}` : "/register"}
            className="group"
          >
            <div className={`topic-card bg-gradient-to-br ${topic.color} to-transparent backdrop-blur-md`}>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {topic.name}
                </h3>
                <p className="text-slate-400 text-sm mt-1">Master {topic.name} fundementals</p>
              </div>
              <div className="w-24 h-24 relative z-10">
                <img 
                  className="w-full h-full object-contain rounded-xl" 
                  src={topic.img} 
                  alt={topic.name} 
                />
              </div>
              <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
