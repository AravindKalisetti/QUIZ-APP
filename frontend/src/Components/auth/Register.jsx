import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_URL } from "../../config.js";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const navigate = useNavigate();
  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    console.log("Submitting Register Form:", { name, email, password });
    if (name && email && password && password === reEnterPassword) {
      axios
        .post(`${API_URL}/register`, user)
        .then((res) => {
          toast("Successfully Registered", {
            type: "success",
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((err) => {
          toast("Invalid Input", {
            type: "error",
          });
        });
    } else {
      toast("Invalid Input", {
        type: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12 animate-fade-in relative">
      <div className="glass-card w-full max-w-lg p-8 md:p-10 z-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-400">Join our community of developers and start testing your skills</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              className="input-field"
              value={user.name}
              onChange={handleChange}
              placeholder="Your Full Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input
              type="text"
              name="email"
              className="input-field"
              value={user.email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                className="input-field"
                value={user.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
              <input
                type="password"
                name="reEnterPassword"
                className="input-field"
                value={user.reEnterPassword}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            onClick={register}
            className="btn-primary w-full py-3 text-lg mt-4"
          >
            Sign Up
          </button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-800 text-slate-400 rounded-full">OR</span>
            </div>
          </div>

          <Link to="/login" className="block text-center mt-6">
            <button className="btn-secondary w-full py-3 text-lg">
              Already have an account? Login
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden lg:block absolute left-10 top-20 opacity-10 pointer-events-none">
        <img className="h-[500px] w-auto object-contain" src="./register.gif" alt="registergif" />
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};
