import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Marquee from "react-fast-marquee";
import Lottie from "react-lottie-player";
import LottieBlob from "../components/ui/LottieBlob";
import LottieLayeredBlobs from "../components/ui/LottieLayeredBlobs";
import studentImg from "../assets/student.png";
import floatingBook from "../assets/lottie-book.json";
import floatingLaptop from "../assets/lottie-laptop.json";
import floatingCode from "../assets/lottie-code.json";
import Navbar from "../components/layout/Navbar";
import "../index.css";
import EventsSection from "../components/EventsSection";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";
import Instructors from "./Instructors";


/* --------------------------------------------------
   TESTIMONIAL DATA
-------------------------------------------------- */
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

/* --------------------------------------------------
   COURSE DATA
-------------------------------------------------- */
const courses = [
  {
    title: "IT Statistics & Data Science",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
  },
  {
    title: "Adobe Illustrator for Graphic Design",
    img: "https://images.unsplash.com/photo-1587614382346-4ec65b7d3a9f?q=80&w=1200",
  },
  {
    title: "SEO for Your Home-Based Business",
    img: "https://images.unsplash.com/photo-1581093458791-9b6c9737e9d7?q=80&w=1200",
  },
  {
    title: "Advanced Freelancing Strategies",
    img: "https://images.unsplash.com/photo-1581092334651-3c7d1f2d6b67?q=80&w=1200",
  },
  {
    title: "Fiverr & Upwork Profile Building",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200",
  },
  {
    title: "Graphic Design Fundamentals",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
  },
];

/* --------------------------------------------------
   TOOLS DATA
-------------------------------------------------- */
const tools = [
  {
    title: "Canva Pro",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
  },
  {
    title: "ChatGPT Pro",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
  },
  {
    title: "Figma",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
  },
];


/* --------------------------------------------------
   HOME PAGE
-------------------------------------------------- */

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const user = auth.currentUser;
    if (!user) navigate("/auth");       // login page
    else navigate("/dashboard");        // dashboard if logged in
  };

  const handleGoTools = () => navigate("/tools");     // ✅ ADD THIS
  const handleGoCourses = () => navigate("/courses");
  return (
    <>
      <Navbar />

      {/* -----------------------------------------------------
        HERO SECTION
      ------------------------------------------------------ */}
      <section className="hero-bg min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-12 lg:px-20 relative">

          {/* Floating Bubbles */}
          <div className="bubble-container absolute inset-0 -z-10">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className={`bubble2 bubble-${i + 1}`}></div>
            ))}
          </div>

          {/* Left Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-[#5CFFBD] to-[#3BA3FF] bg-clip-text text-transparent">
                SkyUp Campus
              </span>
            </h1>


            <p className="mt-5 text-white/80 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
              Learn freelancing, design & development — Build your future with
              expert-led courses and real-world projects.
            </p>


            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={handleGetStarted} className="btn btn-primary">
                Get Started
              </button>

              <button onClick={handleGoTools} className="btn btn-ghost">
                Explore Tools
              </button>
            </div>
          </motion.div>

          {/* Hero Image + floating icons */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-skyup-teal/40 via-skyup-purple/30 to-transparent blur-[110px]" />

            <motion.img
              src={studentImg}
              alt="Student learning at SkyUp Campus"
              className="relative z-10 rounded-3xl shadow-2xl object-cover w-[320px] md:w-[420px] lg:w-[480px]"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute -left-10 top-10 w-20 h-20"
              animate={{ y: [-10, 10, -10], rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            >
              <Lottie loop play animationData={floatingBook} />
            </motion.div>

            <motion.div
              className="absolute right-0 bottom-5 w-20 h-20"
              animate={{ y: [10, -12, 10], rotate: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Lottie loop play animationData={floatingLaptop} />
            </motion.div>

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

      {/* -----------------------------------------------------
        ABOUT SECTION
      ------------------------------------------------------ */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 mt-32 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold mb-8"
        >
          About <span className="text-skyup-teal">SkyUp Campus</span>
        </motion.h2>

        <p className="text-center text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
          SkyUp Campus is a modern digital learning platform designed to help students,
          freelancers, beginners, and career-changers build real-world skills.
          We focus on practical, industry-level learning through freelancing,
          software development, UI/UX, marketing, and creative design.
        </p>
      </section>

      {/* -----------------------------------------------------
  COURSES SECTION
------------------------------------------------------ */}
      <section
        id="courses"
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-32 text-white"
      >
        <h2 className="text-center text-4xl font-bold mb-12">
          Our <span className="text-skyup-teal">Courses</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all backdrop-blur-md"
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-xl">{c.title}</h3>

                <p className="text-sm text-white/70 mt-2">
                  Learn from industry professionals and build real-world skills.
                </p>

                <button
                  className="btn btn-primary mt-4 w-full"
                  onClick={() => navigate("/courses")}                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* -----------------------------------------------------
  TOOLS SECTION
------------------------------------------------------ */}
      <section
        id="tools"
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 mt-32 text-white"
      >
        <h2 className="text-center text-4xl font-bold mb-12">
          SkyUp <span className="text-skyup-teal">Tools</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              onClick={() => navigate("/tools")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate("/tools")}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all cursor-pointer"
            >
              {/* Image */}
              <img
                src={tool.img}
                alt={tool.title}
                className="h-40 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold">{tool.title}</h3>
                <p className="text-sm text-white/70 mt-2">
                  Click to explore this tool
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* -----------------------------------------------------
        TESTIMONIALS SECTION
      ------------------------------------------------------ */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-32 text-white">
        <h2 className="text-center text-4xl font-bold mb-12">
          What Our <span className="text-skyup-teal">Students Say</span>
        </h2>

        <Marquee pauseOnHover gradient={false} speed={40}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass p-6 rounded-3xl mx-4 w-[310px] bg-white/10 backdrop-blur-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-14 w-14 rounded-full border-2 border-white/30"
                />
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-white/70 text-sm">{t.role}</p>
                </div>
              </div>

              <p className="text-white/80 text-sm italic">“{t.quote}”</p>
              <p className="text-yellow-400 mt-3">★★★★★</p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* 🎉 NEW EVENTS SECTION — FULLY INTEGRATED */}
      <EventsSection />

      {/* Decorative Lottie blobs */}
      <section className="relative mx-auto max-w-7xl px-4 text-white">
        <LottieBlob />
        <div className="glass grid md:grid-cols-2 overflow-hidden relative z-10"></div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 text-white">
        <LottieLayeredBlobs />
        <div className="relative z-10 glass grid md:grid-cols-2 overflow-hidden"></div>
      </section>

      {/* -----------------------------------------------------
          CONTACT SECTION (FIXED)
      ------------------------------------------------------ */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-32 text-white">
        <h2 className="text-center text-4xl font-bold mb-12">
          Get in <span className="text-skyup-teal">Touch</span>
        </h2>

        <div className="glass p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: ADDRESS */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-skyup-teal">Our Address</h3>

            <p className="text-white/80 leading-relaxed">
              No. 331, Trincomalee, Sri Lanka
            </p>

            <p className="mt-4 text-white/80">
              <strong className="text-white">Phone:</strong> +94 760007822
            </p>

            <p className="mt-1 text-white/80">
              <strong className="text-white">Email:</strong> skyup.official08@gmail.com
            </p>
          </div>

          {/* RIGHT: FIXED FORM */}
          <form className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                          text-white focus:ring-2 focus:ring-skyup-teal outline-none"
              />

              <input
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                          text-white focus:ring-2 focus:ring-skyup-teal outline-none"
              />
            </div>

            <input
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                        text-white focus:ring-2 focus:ring-skyup-teal outline-none"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                        text-white focus:ring-2 focus:ring-skyup-teal outline-none resize-none"
            ></textarea>

            <button className="btn btn-primary w-full py-3 text-lg shadow-lg hover:shadow-skyup-teal/40">
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* Background Lottie Decorations */}
      <div className="relative mt-24">
        <LottieBlob />
        <LottieLayeredBlobs />
      </div>
    </>
  );
}
