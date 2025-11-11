import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [show, setShow] = useState(false);

  return (
    <section className="mx-auto max-w-5xl px-4 text-white">
      <div className="glass grid md:grid-cols-2 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
          className="h-[480px] object-cover"
        />
        <div className="p-10">
          <h2 className="text-center text-3xl font-bold mb-6">
            Join <span className="text-skyup-teal">SkyUp Campus</span>
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white"
            />
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Create Password"
                className="w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white pr-10"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 text-white/80"
              >
                {show ? <EyeOff /> : <Eye />}
              </button>
            </div>
            <button className="btn btn-primary w-full">Create Account</button>
            <p className="text-center text-white/70 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-skyup-teal underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
