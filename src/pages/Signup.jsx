import { useState } from "react";
import { motion } from "framer-motion";
import authImage from "../assets/student-laptop.png";
import { auth, googleProvider, sendSMS, setupRecaptcha } from "../firebase";

import { auth, googleProvider, sendSMS, setupRecaptcha } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup
} from "firebase/auth";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // -------------------------
  // EMAIL + PASSWORD SIGNUP
  // -------------------------
  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    if (password !== confirm) {
      setErrorMsg("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      // Create Firebase user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update profile with full name
      await updateProfile(userCredential.user, {
        displayName: fullName
      });

      console.log("Signup successful!");

      // Redirect
      window.location.href = "/dashboard";

    } catch (error) {
      console.error(error);
      setErrorMsg(error.message);
    }

    setLoading(false);
  };

  // -------------------------
  // GOOGLE SIGNUP (Optional)
  // -------------------------
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/dashboard";
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <section className="hero-bg min-h-[100vh] flex items-center justify-center px-6 md:px-10 lg:px-20 py-16">

      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 glass 
                      rounded-3xl overflow-hidden backdrop-blur-lg shadow-2xl">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <img
            src={authImage}
            alt="SkyUp Signup"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Create Account
          </h1>

          <p className="text-white/70 mb-8 text-base md:text-lg">
            Join <span className="text-skyup-teal font-semibold">SkyUp Campus</span>
            and start learning with premium tools and expert mentorship.
          </p>

          {/* Error Box */}
          {errorMsg && (
            <p className="bg-red-500/30 text-red-200 p-3 rounded-xl mb-4 text-sm">
              {errorMsg}
            </p>
          )}

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleSignup}>

            {/* Full Name */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Phone Number (Optional for now) */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Confirm Password</label>
              <input
                type="password"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full py-3 text-lg shadow-lg hover:shadow-skyup-teal/40"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Google Signup Button */}
          <button
            onClick={handleGoogleSignup}
            className="mt-6 w-full py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl flex items-center justify-center gap-3 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-5"
            />
            Sign Up with Google
          </button>

          {/* Switch to Login */}
          <p className="text-white/60 text-sm mt-6 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-skyup-teal underline">
              Login here
            </a>
          </p>

        </motion.div>
      </div>
    </section>
  );
}
