import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import LottieBlob from "../components/LottieBlob";
import LottieLayeredBlobs from "../components/LottieLayeredBlobs";

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
      {/* 🌟 HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Welcome to <span className="text-skyup-teal">SkyUp Campus</span>
        </motion.h1>

        <p className="mt-4 text-white/80 text-lg">
          Learn freelancing, design & development — Build your future.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="/signup" className="btn btn-primary">
            Get Started
          </a>
          <a href="/tools" className="btn btn-ghost">
            Explore Tools
          </a>
        </div>
      </section>

      {/* 💬 TESTIMONIALS SECTION */}
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

        <Marquee pauseOnHover={true} gradient={false} speed={40} className="gap-6">
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

          <section className="relative mx-auto max-w-7xl px-4 text-white">
            <LottieBlob />
            <div className="glass grid md:grid-cols-2 overflow-hidden relative z-10">
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 text-white">
            <LottieLayeredBlobs />
            <div className="relative z-10 glass grid md:grid-cols-2 overflow-hidden">
              {/* your hero content */}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 mt-20 text-white overflow-hidden">
            <LottieLayeredBlobs />
            <div className="relative z-10">
              {/* testimonials carousel */}
            </div>
          </section>

        <p className="text-center mt-6 text-white/60 text-sm">
          (Hover to pause the scrolling)
        </p>
      </section>
    </>
  );
}
