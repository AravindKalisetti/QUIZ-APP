import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAdminId,
  loginAdminName,
  loginUser,
  loginUserName,
} from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_URL } from "../../config.js";

export const Login = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post(`${API_URL}/login`, user)
      .then((res) => {
        if (res.data.user.email == "sudhirchavhan100@gmail.com") {
          dispatch(loginAdminId(res.data.user._id));
          dispatch(loginAdminName(res.data.user.name));
          toast(`Welcome Admin ${res.data.user.name}`, {
            type: "success",
          });

          setTimeout(() => {
            navigate("/profile");
          }, 4000);
        } else {
          dispatch(loginUser(res.data.user._id));
          dispatch(loginUserName(res.data.user.name));
          toast(`Successfully Login `, {
            type: "success",
          });
          setTimeout(() => {
            navigate("/profile");
          }, 3000);
        }

        //         if(res.data.message=="login successfully"){
        // alert("Login successfully")
        //         }
        // navigate('/')
      })
      .catch((err) => {
        toast("Invalid Credientials", {
          type: "error",
        });
      });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 animate-fade-in">
      <div className="glass-card w-full max-w-md p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Please enter your details to sign in</p>
        </div>

        <div className="space-y-6">
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

          <button
            onClick={login}
            className="btn-primary w-full py-3 text-lg"
          >
            Sign In
          </button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-800 text-slate-400 rounded-full">OR</span>
            </div>
          </div>

          <Link to="/register" className="block text-center mt-6">
            <button className="btn-secondary w-full py-3 text-lg">
              Create an Account
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden lg:block fixed right-10 bottom-10 opacity-20 pointer-events-none">
        <img className="h-96 w-96 object-contain" src="./login.gif" alt="logingif" />
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};
