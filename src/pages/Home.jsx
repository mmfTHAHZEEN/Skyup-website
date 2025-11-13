import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Lottie from "react-lottie-player";
import LottieBlob from "../components/LottieBlob";
import LottieLayeredBlobs from "../components/LottieLayeredBlobs";

// ✨ Your existing student hero image
import studentImg from "../assets/student-laptop.png";

// ✨ Small floating icons (download small JSONs from LottieFiles)
import floatingBook from "../assets/lottie-book.json";
import floatingLaptop from "../assets/lottie-laptop.json";
import floatingCode from "../assets/lottie-code.json";

const testimonials = [
  {
    name: "Ahmed Rizzi",
    role: "Property Owner, C-Siesta",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The SkyUp team was incredibly helpful throughout my journey. From training to real-world freelancing, they made everything simple and structured.",
  },
  {
    name: "Rashmi Fernando",
    role: "UI/UX Student",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    quote:
      "SkyUp Campus changed how I learn. The instructors are friendly and industry-experienced — I built my first freelance portfolio in just 8 weeks!",
  },
  {
    name: "Kaveen Jayasekara",
    role: "Freelance Web Developer",
    img: "https://randomuser.me/api/portraits/men/74.jpg",
    quote:
      "I joined the Web Development course — it was hands-on, modern, and perfectly matched the job market. The mentorship support is top-notch!",
  },
  {
    name: "Nisal Katapearchchi",
    role: "Digital Marketing Graduate",
    img: "https://randomuser.me/api/portraits/men/19.jpg",
    quote:
      "The learning experience was beyond my expectations. I now manage my own freelance clients thanks to the SkyUp team’s career guidance.",
  },
];

export default function Home() {
  return (
    <>
      {/* 🌟 HERO SECTION (same structure) */}
      <section className="hero-bg min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-20 text-center md:text-left text-white relative overflow-hidden">
      {/* 🌌 Floating background bubbles */}
      <div className="bubble-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`bubble2 bubble-${i + 1}`}></div>
        ))}
      </div>


        {/* Left text block (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-skyup-purple to-skyup-teal bg-clip-text text-transparent">
              SkyUp Campus
            </span>
          </h1>
          <p className="mt-5 text-white/80 text-lg md:text-xl max-w-lg">
            Learn freelancing, design & development — Build your future with
            expert-led courses and real-world projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="/signup" className="btn btn-primary">
              Get Started
            </a>
            <a href="/tools" className="btn btn-ghost">
              Explore Tools
            </a>
          </div>
        </motion.div>

        {/* Right side image + subtle floating icons */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex justify-center mt-10 md:mt-0 relative"
        >
          {/* Glow behind student */}
          <div className="absolute inset-0 bg-gradient-to-tr from-skyup-teal/40 via-skyup-purple/30 to-transparent blur-[120px] rounded-full animate-pulse-slow"></div>

          {/* Floating student image */}
          <motion.img
            src={studentImg}
            alt="Student with laptop and books"
            className="relative z-10 rounded-3xl shadow-2xl object-cover w-[320px] md:w-[420px] lg:w-[480px]"
            initial={{ y: 20 }}
            animate={{ y: [20, -10, 20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating animated icons (books, laptop, code) */}
          <motion.div
            className="absolute -left-10 top-10 w-24 h-24"
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            <Lottie loop play animationData={floatingBook} />
          </motion.div>

          <motion.div
            className="absolute right-0 bottom-0 w-24 h-24"
            animate={{ y: [10, -20, 10], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          >
            <Lottie loop play animationData={floatingLaptop} />
          </motion.div>

          <motion.div
            className="absolute right-16 top-16 w-20 h-20"
            animate={{ y: [-10, 15, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          >
            <Lottie loop play animationData={floatingCode} />
          </motion.div>
        </motion.div>
      </section>

      {/* 💬 TESTIMONIALS SECTION (untouched) */}
      <section className="mx-auto max-w-7xl px-4 mt-20 text-white overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-12"
        >
          What Our <span className="text-skyup-teal">Students Say</span>
        </motion.h2>

        <Marquee pauseOnHover gradient={false} speed={40} className="gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass p-6 rounded-3xl mx-3 w-[320px] text-white backdrop-blur-md bg-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-white/70 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-white/80 text-sm italic">“{t.quote}”</p>
              <div className="flex gap-1 mt-3 text-yellow-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </Marquee>

        <p className="text-center mt-6 text-white/60 text-sm">
          (Hover to pause the scrolling)
        </p>
      </section>

      {/* Decorative backgrounds (unchanged) */}
      <section className="relative mx-auto max-w-7xl px-4 text-white">
        <LottieBlob />
        <div className="glass grid md:grid-cols-2 overflow-hidden relative z-10"></div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 text-white">
        <LottieLayeredBlobs />
        <div className="relative z-10 glass grid md:grid-cols-2 overflow-hidden"></div>
      </section>
    </>
  );
}
