import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getQuiz } from "../../Redux/action.js";
import { Quiz } from "./Quiz";

export const Quizes = () => {
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const isLoading = useSelector((state) => state?.mernQuize.loading);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getQuiz(params));
    }
  }, [dispatch, params.id]);

  // Handle both array and single object responses, and check multiple common field names
  const quizObj = Array.isArray(singleQuiz) ? singleQuiz[0] : singleQuiz;
  const questionArr = quizObj?.questionArray || quizObj?.questions || [];

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs animate-pulse">Initializing Quiz Room...</p>
      </div>
    );
  }

  if (!questionArr || questionArr.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Questions Missing</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          We couldn't find any questions for <span className="text-indigo-400 font-bold">{params.id}</span>. 
          Please ensure the database is seeded or try another topic.
        </p>
        <Link to="/" className="btn-primary py-4 px-10 text-sm">
          Return to Selection
        </Link>
      </div>
    );
  }

  return <Quiz questionArr={questionArr} />;
};
