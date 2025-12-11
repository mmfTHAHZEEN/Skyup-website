import { useState } from "react";
import { motion } from "framer-motion";
import authImage from "../assets/student-laptop.png";

import {
  auth,
  googleProvider
} from "../firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";


export default function Auth() {
  const [mode, setMode] = useState("login"); // login | signup

  // Form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // -------------------------------------
  // LOGIN FUNCTION
  // -------------------------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/dashboard";
    } catch (error) {
      setErrorMsg(error.message);
    }

    setLoading(false);
  };

  // -------------------------------------
  // SIGNUP FUNCTION
  // -------------------------------------
  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      // 1. Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // 2. Save full name to Firebase profile
      await updateProfile(userCredential.user, {
        displayName: fullName
      });

      window.location.href = "/dashboard";
    } catch (error) {
      setErrorMsg(error.message);
    }

    setLoading(false);
  };

  // -------------------------------------
  // GOOGLE LOGIN
  // -------------------------------------
  const handleGoogleLogin = async () => {
    setErrorMsg("");

    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/dashboard";
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <section className="hero-bg min-h-[100vh] flex items-center justify-center px-6 md:px-10 lg:px-20 py-16">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 glass rounded-3xl overflow-hidden backdrop-blur-lg shadow-2xl">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <img
            src={authImage}
            alt="SkyUp Learning"
            className="h-full w-full object-cover rounded-l-3xl"
          />
        </motion.div>

        {/* RIGHT AUTH FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-14 flex flex-col justify-center text-white"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Welcome to <span className="text-skyup-teal">SkyUp</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/70 mb-8 text-base md:text-lg">
            {mode === "login"
              ? "Login to your SkyUp account to continue your learning journey."
              : "Create a new SkyUp account and start learning today!"}
          </p>

          {/* Toggle Tabs */}
          <div className="flex gap-4 mb-10">
            <button
              onClick={() => setMode("login")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${mode === "login"
                ? "bg-skyup-teal text-black shadow-md"
                : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
            >
              Login
            </button>

            <button
              onClick={() => setMode("signup")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${mode === "signup"
                ? "bg-skyup-teal text-black shadow-md"
                : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
            >
              Sign Up
            </button>
          </div>

          {/* Error Box */}
          {errorMsg && (
            <p className="bg-red-500/30 text-red-200 p-3 rounded-xl mb-4 text-sm">
              {errorMsg}
            </p>
          )}

          {/* FORM */}
          <form
            className="space-y-5"
            onSubmit={mode === "login" ? handleLogin : handleSignup}
          >
            {/* Signup Extra Inputs */}
            {mode === "signup" && (
              <>
                {/* Full Name */}
                <div>
                  <label className="block text-white/70 text-sm mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white/70 text-sm mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
                  />
                </div>
              </>
            )}

            {/* Email */}
            <div>
              <label className="block text-white/70 text-sm mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/70 text-sm mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full mt-4 py-3 text-lg shadow-lg hover:shadow-skyup-teal/40"
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                  ? "Login"
                  : "Create Account"}
            </button>
          </form>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="mt-6 w-full py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl flex items-center justify-center gap-3 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="google"
              className="h-5"
            />
            Continue with Google
          </button>
        </motion.div>
      </div>
    </section>
  );
}
