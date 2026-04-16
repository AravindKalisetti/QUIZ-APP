import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postQuizObj } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";

export const QuizForm = () => {
  const dispatch = useDispatch();

  const [quizMetadata, setQuizMetadata] = useState({
    titleId: "javaScriptData",
    displayName: "JavaScript Mastery",
  });

  const [questions, setQuestions] = useState([]);
  
  const [currentQuestion, setCurrentQuestion] = useState({
    questions: "",
    correctAnswer: "",
    options: [
      { option: "", isCorrect: false, id: 1 },
      { option: "", isCorrect: false, id: 2 },
      { option: "", isCorrect: false, id: 3 },
      { option: "", isCorrect: false, id: 4 },
    ],
  });

  const handleOptionChange = (id, value) => {
    setCurrentQuestion({
      ...currentQuestion,
      options: currentQuestion.options.map(opt => 
        opt.id === id ? { ...opt, option: value } : opt
      )
    });
  };

  const handleCorrectAnswer = (value) => {
    setCurrentQuestion({
      ...currentQuestion,
      correctAnswer: value,
      options: currentQuestion.options.map(opt => ({
        ...opt,
        isCorrect: opt.option === value
      }))
    });
  };

  const addQuestionToSet = () => {
    if (!currentQuestion.questions || !currentQuestion.correctAnswer) {
      toast.error("Please fill question and correct answer!");
      return;
    }
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      questions: "",
      correctAnswer: "",
      options: [
        { option: "", isCorrect: false, id: 1 },
        { option: "", isCorrect: false, id: 2 },
        { option: "", isCorrect: false, id: 3 },
        { option: "", isCorrect: false, id: 4 },
      ],
    });
    toast.success("Question added to draft!");
  };

  const handleFinalUpload = () => {
    if (questions.length === 0) {
      toast.error("Add at least one question first!");
      return;
    }

    const finalObj = {
      title: quizMetadata.titleId,
      questionArray: questions
    };

    dispatch(postQuizObj(finalObj));
    toast.success(`${quizMetadata.displayName} Quiz Uploaded Successfully!`);
    setQuestions([]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Creator Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-8 border-indigo-500/20">
            <h2 className="text-xl font-black text-white mb-6 uppercase tracking-wider">Quiz Metadata</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Internal Title ID</label>
                <select 
                  className="input-field w-full"
                  value={quizMetadata.titleId}
                  onChange={(e) => setQuizMetadata({...quizMetadata, titleId: e.target.value})}
                >
                  <option value="javaScriptData">javaScriptData</option>
                  <option value="reactData">reactData</option>
                  <option value="reduxData">reduxData</option>
                  <option value="htmlData">htmlData</option>
                  <option value="cssData">cssData</option>
                  <option value="mongodbData">mongodbData</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Display Name</label>
                <input 
                  type="text" 
                  className="input-field w-full"
                  value={quizMetadata.displayName}
                  onChange={(e) => setQuizMetadata({...quizMetadata, displayName: e.target.value})}
                  placeholder="e.g. Advanced React Patterns"
                />
              </div>
            </div>
          </div>

          <div className="glass-card p-8 bg-indigo-500/5 items-center justify-between flex">
            <div className="text-left">
              <p className="text-4xl font-black text-white">{questions.length}</p>
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Questions in Draft</p>
            </div>
            <button 
              onClick={handleFinalUpload}
              className="btn-primary py-3 px-6 text-sm"
            >
              Publish Quiz
            </button>
          </div>
        </div>

        {/* Question Editor */}
        <div className="lg:col-span-8">
          <div className="glass-card p-10 relative overflow-hidden">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black text-white leading-none">Question Editor</h2>
              <div className="px-4 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-slate-400 tracking-widest">
                NEW QUESTION
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-tighter mb-4">The Question Statement</label>
                <textarea 
                  rows="3"
                  className="input-field w-full text-xl font-bold"
                  value={currentQuestion.questions}
                  onChange={(e) => setCurrentQuestion({...currentQuestion, questions: e.target.value})}
                  placeholder="e.g. What is the virtualization technique used in React?"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((opt, i) => (
                  <div key={opt.id} className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-600">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <input 
                      type="text"
                      className="input-field w-full pl-10"
                      value={opt.option}
                      onChange={(e) => handleOptionChange(opt.id, e.target.value)}
                      placeholder={`Option ${opt.id}`}
                    />
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Set Correct Answer</label>
                <div className="flex flex-wrap gap-3">
                  {currentQuestion.options.map((opt, i) => (
                    <button
                      key={opt.id}
                      onClick={() => handleCorrectAnswer(opt.option)}
                      className={`px-6 py-2 rounded-xl text-xs font-bold transition-all
                        ${currentQuestion.correctAnswer === opt.option && opt.option !== ""
                          ? "bg-indigo-500 text-white shadow-lg" 
                          : "bg-white/5 text-slate-400 hover:bg-white/10"}`}
                    >
                      {opt.option || `Option ${opt.id}`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  onClick={addQuestionToSet}
                  className="btn-secondary py-3 px-10 text-sm font-bold uppercase tracking-widest"
                >
                  Add to Draft
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};
