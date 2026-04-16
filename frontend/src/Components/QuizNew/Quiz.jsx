import React, { useState, useEffect, useRef } from "react";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import { postQuizResult, postUserResult } from "../../Redux/action.js";
import { Link } from "react-router-dom";

export const Quiz = (props) => {
  const questionArr = props.questionArr || [];
  const data = useSelector((state) => state?.mernQuize?.QuizData);
  const userID = useSelector((state) => state?.mernQuize?.userId);
  const quizID = data[0]?._id;
  const dispatch = useDispatch();

  const [num, setNum] = useState(0);
  const [ans, setAns] = useState([]);
  const [btnshow, setBtnshow] = useState(false);
  const [disable, setDisable] = useState(null);
  
  // Timer State
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleQue = (index) => {
    setDisable(index);
  };

  const calculatePoints = () => {
    let score = 0;
    ans.forEach((userAns, i) => {
      if (userAns === questionArr[i]?.correctAnswer) {
        score += 10; // 10 points per correct answer
      }
    });
    return score;
  };

  const handleFinish = () => {
    clearInterval(timerRef.current);
    const finalAns = [...ans];
    dispatch(postUserResult(finalAns));
    
    // Final points calculation
    let score = 0;
    finalAns.forEach((userAns, i) => {
      if (userAns === questionArr[i]?.correctAnswer) {
        score += 10;
      }
    });

    const obj = {
      quizId: quizID,
      userId: userID,
      quizResult: finalAns,
      points: score,
      timeTaken: seconds
    };
    dispatch(postQuizResult(obj));
  };

  if (!questionArr.length) return <div className="text-white text-center py-20">Loading Questions...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <div className="glass-card p-8 md:p-12 relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
          <div 
            className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-500"
            style={{ width: `${((num + 1) / questionArr.length) * 100}%` }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 font-black border border-indigo-500/30">
              {num + 1}
            </div>
            <div>
              <h2 className="text-xs font-black uppercase text-slate-500 tracking-widest">Question</h2>
              <p className="text-white font-bold">Of {questionArr.length}</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-right">
              <h2 className="text-xs font-black uppercase text-slate-500 tracking-widest">Timer</h2>
              <p className="text-2xl font-black text-white tabular-nums">{formatTime(seconds)}</p>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {questionArr[num]?.questions}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-12">
          {questionArr[num]?.options?.map((answer, index) => (
            <button
              key={index}
              disabled={disable !== null}
              className={`group flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 text-left
                ${disable === index 
                  ? "bg-indigo-500 border-indigo-400 text-white shadow-lg" 
                  : "bg-slate-900/40 border-white/5 hover:border-indigo-500/50 text-slate-300 hover:text-white"}`}
              onClick={() => {
                const newAns = [...ans];
                newAns[num] = answer.option;
                setAns(newAns);
                handleQue(index);
                
                // Auto advance if not last question
                setTimeout(() => {
                  if (num < questionArr.length - 1) {
                    setNum(num + 1);
                    setDisable(null);
                  } else {
                    setBtnshow(true);
                  }
                }, 600);
              }}
            >
              <div className="flex items-center space-x-4">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm
                  ${disable === index ? "bg-white/20" : "bg-white/5 group-hover:bg-indigo-500/20"}`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="font-medium">{answer.option}</span>
              </div>
              {disable === index && (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center bg-slate-950/30 -mx-8 -mb-8 p-8 md:-mx-12 md:-mb-12">
          <button
            className="text-slate-500 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors"
            onClick={() => {
              if (num < questionArr.length - 1) {
                setNum(num + 1);
                setDisable(null);
                const newAns = [...ans];
                newAns[num] = "Skipped";
                setAns(newAns);
              } else {
                setBtnshow(true);
              }
            }}
          >
            Skip Question
          </button>

          {btnshow ? (
            <Link to="/showallanswer">
              <button
                className="btn-primary py-4 px-12 text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                onClick={handleFinish}
              >
                Finish Quiz
              </button>
            </Link>
          ) : (
            <div className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              Select an answer to continue
            </div>
          )}
        </div>
      </div>
      
      {/* Quiz Tips Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 border-white/5 opacity-50 hover:opacity-100 transition-opacity">
          <h4 className="text-indigo-400 font-bold mb-2 text-sm uppercase">Pro Tip #1</h4>
          <p className="text-slate-400 text-xs leading-relaxed">The timer impacts your global ranking. Elite warriors finish in record time!</p>
        </div>
        <div className="glass-card p-6 border-white/5 opacity-50 hover:opacity-100 transition-opacity">
          <h4 className="text-indigo-400 font-bold mb-2 text-sm uppercase">Pro Tip #2</h4>
          <p className="text-slate-400 text-xs leading-relaxed">Check the Learning Guide if you get stuck. Most concepts are covered there.</p>
        </div>
        <div className="glass-card p-6 border-white/5 opacity-50 hover:opacity-100 transition-opacity">
          <h4 className="text-indigo-400 font-bold mb-2 text-sm uppercase">Pro Tip #3</h4>
          <p className="text-slate-400 text-xs leading-relaxed">A "Perfect Streak" is when you answer every question correctly. Aim for it!</p>
        </div>
      </div>
    </div>
  );
};
