import { useState } from "react";
import { motion } from "framer-motion";

import authImage from "../assets/student-laptop.png"; // make sure this exists

export default function Auth() {
  const [mode, setMode] = useState("login"); // login | signup

  return (
    <section className="hero-bg min-h-[100vh] flex items-center justify-center px-6 md:px-10 lg:px-20 py-16">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 glass rounded-3xl overflow-hidden backdrop-blur-lg shadow-2xl">

        {/* -------------------- LEFT IMAGE -------------------- */}
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

        {/* -------------------- RIGHT AUTH FORM -------------------- */}
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
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                mode === "login"
                  ? "bg-skyup-teal text-black shadow-md"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                mode === "signup"
                  ? "bg-skyup-teal text-black shadow-md"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* -------------------- FORM -------------------- */}
          <form className="space-y-5">

            {mode === "signup" && (
              <>
                <div>
                  <label className="block text-white/70 text-sm mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
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
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/70 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full mt-4 py-3 text-lg shadow-lg hover:shadow-skyup-teal/40"
            >
              {mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          {/* Helper Link */}
          <p className="text-white/60 text-sm mt-6 text-center">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-skyup-teal underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already registered?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-skyup-teal underline"
                >
                  Login
                </button>
              </>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
