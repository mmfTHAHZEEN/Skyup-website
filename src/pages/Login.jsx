import { motion } from "framer-motion";
import authImage from "../assets/laptop.png"; // Update image path if needed

export default function Login() {
  return (
    <section className="hero-bg min-h-[100vh] flex items-center justify-center px-6 md:px-10 lg:px-20 py-16">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 glass rounded-3xl overflow-hidden backdrop-blur-lg shadow-2xl">

        {/* --------------------------------------
            LEFT IMAGE (HIDDEN ON MOBILE)
        --------------------------------------- */}
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

        {/* --------------------------------------
            RIGHT: LOGIN FORM
        --------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-14 flex flex-col justify-center text-white"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Welcome Back
          </h1>

          {/* Subheading */}
          <p className="text-white/70 mb-8 text-base md:text-lg">
            Login to continue your journey on{" "}
            <span className="text-skyup-teal font-semibold">SkyUp Campus</span>.
          </p>

          {/* Login Form */}
          <form className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-white/70 text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white 
                  focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/70 text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white
                  focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a href="/forgot-password" className="text-skyup-teal text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full py-3 text-lg shadow-lg hover:shadow-skyup-teal/40"
            >
              Login
            </button>
          </form>

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
