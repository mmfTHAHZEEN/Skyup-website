import { motion } from "framer-motion";
import Lottie from "react-lottie-player";

import studentImg from "../../assets/student-laptop.png";
import floatingBook from "../../assets/lottie-book.json";
import floatingLaptop from "../../assets/lottie-laptop.json";
import floatingCode from "../../assets/lottie-code.json";

export default function Hero() {
  return (
    <section className="hero-bg min-h-[90vh] flex items-center">
      {/* DECORATIVE LAYERS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neon grid */}
        <div className="hero-neon-grid" />

        {/* Glow behind main image / center */}
        <div className="glow-bg" />

        {/* 2025 Waves */}
        <div className="hero-wave hero-wave--1" />
        <div className="hero-wave hero-wave--2" />

        {/* Bubbles */}
        <div className="bubble-container">
          {Array.from({ length: 12 }).map((_, i) => {
            const sizeClass =
              i % 3 === 0
                ? "bubble-small"
                : i % 3 === 1
                ? "bubble-medium"
                : "bubble-large";
            const delayClass =
              i % 3 === 0
                ? "bubble-delay-1"
                : i % 3 === 1
                ? "bubble-delay-2"
                : "bubble-delay-3";

            // simple manual positions for better control
            const positions = [
              { top: "10%", left: "8%" },
              { top: "18%", left: "70%" },
              { top: "30%", left: "20%" },
              { top: "40%", left: "80%" },
              { top: "55%", left: "12%" },
              { top: "60%", left: "60%" },
              { top: "70%", left: "30%" },
              { top: "75%", left: "75%" },
              { top: "20%", left: "45%" },
              { top: "35%", left: "90%" },
              { top: "5%", left: "40%" },
              { top: "82%", left: "50%" },
            ];

            return (
              <div
                key={i}
                className={`bubble2 ${sizeClass} ${delayClass}`}
                style={positions[i]}
              />
            );
          })}
        </div>

        {/* Particles */}
        <div className="particle-layer">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className={`particle particle-${i + 1}`} />
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-12 lg:px-20">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-skyup-purple to-skyup-teal bg-clip-text text-transparent">
              SkyUp Campus
            </span>
          </h1>

          <p className="mt-5 text-white/80 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
            Learn freelancing, design & development — build your future with
            expert-led courses and real-world projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="/signup" className="btn btn-primary">
              Get Started
            </a>
            <a href="/tools" className="btn btn-ghost">
              Explore Tools
            </a>
          </div>
        </motion.div>

        {/* Right: Image + Lottie icons */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full flex justify-center"
        >
          {/* Main floating image */}
          <motion.img
            src={studentImg}
            alt="Student learning at SkyUp Campus"
            className="relative z-10 rounded-3xl shadow-2xl object-cover w-[320px] md:w-[420px] lg:w-[480px]"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Lottie #1 - Book */}
          <motion.div
            className="absolute -left-10 top-10 w-20 h-20"
            animate={{ y: [-10, 10, -10], rotate: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            <Lottie loop play animationData={floatingBook} />
          </motion.div>

          {/* Lottie #2 - Laptop */}
          <motion.div
            className="absolute right-0 bottom-5 w-20 h-20"
            animate={{ y: [10, -12, 10], rotate: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Lottie loop play animationData={floatingLaptop} />
          </motion.div>

          {/* Lottie #3 - Code */}
          <motion.div
            className="absolute right-16 top-14 w-20 h-20"
            animate={{ y: [-12, 10, -12], rotate: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Lottie loop play animationData={floatingCode} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
