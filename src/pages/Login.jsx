import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔁 redirect path after login
  const getRedirectPath = () => {
    const params = new URLSearchParams(location.search);
    return params.get("from") || "/dashboard";
  };

  // -------------------------
  // EMAIL + PASSWORD LOGIN
  // -------------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(getRedirectPath(), { replace: true });
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  // -------------------------
  // GOOGLE LOGIN
  // -------------------------
  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      await signInWithPopup(auth, googleProvider);
      navigate(getRedirectPath(), { replace: true });
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero-bg min-h-[100vh] flex items-center justify-center px-6 md:px-10 lg:px-20 py-16">
      <div className="max-w-4xl w-full glass rounded-3xl p-10 md:p-14 backdrop-blur-lg shadow-2xl text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Welcome Back
          </h1>

          <p className="text-white/70 mb-8 text-base md:text-lg">
            Login to continue your journey on{" "}
            <span className="text-skyup-teal font-semibold">
              SkyUp Campus
            </span>.
          </p>

          {errorMsg && (
            <p className="bg-red-500/30 text-red-200 p-3 rounded-xl mb-4 text-sm">
              {errorMsg}
            </p>
          )}

          {/* LOGIN FORM */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-white/70 text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white 
                focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            <div>
              <label className="block text-white/70 text-sm mb-1">
                Password
              </label>
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
              <a
                href="/forgot-password"
                className="text-skyup-teal text-sm hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full py-3 text-lg shadow-lg"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* GOOGLE LOGIN */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="mt-6 w-full py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl flex items-center justify-center gap-3 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-5"
            />
            Continue with Google
          </button>

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
