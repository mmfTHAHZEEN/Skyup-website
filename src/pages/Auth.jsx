import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Auth() {
  const [active, setActive] = useState("register");
  const [show, setShow] = useState(false);

  return (
    <section className="mx-auto max-w-5xl px-4 text-white">
      <div className="glass grid md:grid-cols-2 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200"
          className="h-[480px] object-cover"
        />
        <div className="p-10">
          <h2 className="text-center text-3xl font-bold mb-5">
            Welcome to <span className="text-skyup-teal">SkyUp..!</span>
          </h2>
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setActive("login")}
              className={`btn ${active === "login" ? "btn-primary" : "btn-ghost"}`}
            >
              Login
            </button>
            <button
              onClick={() => setActive("register")}
              className={`btn ${active === "register" ? "btn-primary" : "btn-ghost"}`}
            >
              Register
            </button>
          </div>

          {active === "login" ? (
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white"
              />
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your Password"
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
              <button className="btn btn-primary w-full">Login</button>
            </form>
          ) : (
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Enter your User Name"
                className="w-full rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white"
              />
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your Password"
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
              <button className="btn btn-primary w-full">Register</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
