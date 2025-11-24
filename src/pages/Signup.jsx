import { motion } from "framer-motion";
import authImage from "../assets/student-laptop.png"; // update if needed

export default function Signup() {
  return (
    <section className="hero-bg min-h-[100vh] flex items-center justify-center px-6 md:px-10 lg:px-20 py-16">
      
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 glass 
                      rounded-3xl overflow-hidden backdrop-blur-lg shadow-2xl">

        {/* ------------------------------ LEFT IMAGE ------------------------------ */}
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

        {/* ------------------------------ SIGNUP FORM ------------------------------ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-14 flex flex-col justify-center text-white"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Create Account
          </h1>

          {/* Sub heading */}
          <p className="text-white/70 mb-8 text-base md:text-lg">
            Join <span className="text-skyup-teal font-semibold">SkyUp Campus</span>  
            and start learning with premium tools and expert mentorship.
          </p>

          {/* Signup Form */}
          <form className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Phone Number</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-white/70 text-sm mb-1 block">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                text-white focus:outline-none focus:ring-2 focus:ring-skyup-teal"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full py-3 text-lg shadow-lg hover:shadow-skyup-teal/40"
            >
              Create Account
            </button>
          </form>

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
