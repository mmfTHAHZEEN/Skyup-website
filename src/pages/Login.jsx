import { useState } from "react";
import { motion } from "framer-motion";
import authImage from "../assets/laptop.png";
import { auth, googleProvider, sendSMS, setupRecaptcha } from "../firebase";

import {
  auth,
  googleProvider
} from "../firebase";

import {
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // -------------------------
  // EMAIL + PASSWORD LOGIN
  // -------------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      // Redirect user after login
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    }

    setLoading(false);
  };

  // -------------------------
  // GOOGLE LOGIN
  // -------------------------
  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Google Login successful!");
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    }

    setLoading(false);
  };

  return (
    <section className="hero-bg min-h-[100vh] flex items-center justify-center px-6 md:px-10 lg:px-20 py-16">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 glass rounded-3xl overflow-hidden backdrop-blur-lg shadow-2xl">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <img
            src={authImage}
            alt="SkyUp Login"
            className="h-full w-full object-cover rounded-l-3xl"
          />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-14 flex flex-col justify-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Welcome Back</h1>

          <p className="text-white/70 mb-8 text-base md:text-lg">
            Login to continue your journey on{" "}
            <span className="text-skyup-teal font-semibold">SkyUp Campus</span>.
          </p>

          {/* ERROR MESSAGE */}
          {errorMsg && (
            <p className="bg-red-500/30 text-red-200 p-3 rounded-xl mb-4 text-sm">
              {errorMsg}
            </p>
          )}

          {/* LOGIN FORM */}
          <form className="space-y-5" onSubmit={handleLogin}>

            {/* Email */}
            <div>
              <label className="block text-white/70 text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white 
                focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/70 text-sm mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white
                focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            <div className="text-right">
              <a href="/forgot-password" className="text-skyup-teal text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full py-3 text-lg shadow-lg hover:shadow-skyup-teal/40"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="mt-6 w-full py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl flex items-center justify-center gap-3 transition"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-5" />
            Continue with Google
          </button>

          {/* Switch to Sign Up */}
          <p className="text-white/60 text-sm mt-6 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-skyup-teal underline">
              Create one
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
