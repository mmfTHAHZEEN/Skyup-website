import { motion } from "framer-motion";

/* -------------------- Stats / Features (Optional) -------------------- */
const features = [
  {
    title: "Expert-Led Learning",
    desc: "All courses are taught by industry professionals with real-world experience.",
  },
  {
    title: "Real Freelancing Skills",
    desc: "We focus on practical training that helps students build strong portfolios.",
  },
  {
    title: "Modern Tools & Resources",
    desc: "Students get access to premium tools, AI resources, templates, and software.",
  },
  {
    title: "1-on-1 Mentorship",
    desc: "Direct guidance from experts to build confidence and career direction.",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-20 text-white">
      {/* -----------------------------------------------------
          PAGE INTRO
      ------------------------------------------------------ */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        About <span className="text-skyup-teal">SkyUp</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center text-white/80 max-w-3xl mx-auto text-lg leading-relaxed mb-16"
      >
        SkyUp Campus is a modern learning platform built to empower the next generation
        of freelancers, designers, developers, and digital creators.  
        We combine expert-led lessons, real-world projects, and access to premium tools
        to help students build strong and competitive portfolios.
      </motion.p>

      {/* -----------------------------------------------------
          WHY SKYUP SECTION
      ------------------------------------------------------ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 backdrop-blur-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-skyup-teal mb-2">{f.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* -----------------------------------------------------
          OUR STORY SECTION
      ------------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-24 glass rounded-3xl p-10 md:p-14 backdrop-blur-lg shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-skyup-teal">
          Our Mission & Vision
        </h2>

        <p className="text-white/80 leading-relaxed text-lg md:text-xl max-w-4xl">
          At SkyUp, our mission is to make high-quality digital education accessible to
          every student. We believe in hands-on learning, real-world application, and
          building confidence through mentorship.
          <br /><br />
          Our vision is to create a community of talented freelancers and digital
          professionals who can compete internationally and build sustainable careers.
        </p>
      </motion.div>

      {/* -----------------------------------------------------
          STATS SECTION (OPTIONAL)
      ------------------------------------------------------ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-24 text-center">
        {[
          { stat: "7,500+", label: "Students Trained" },
          { stat: "250+", label: "Completed Projects" },
          { stat: "120+", label: "Industry Mentors" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-3xl backdrop-blur-md"
          >
            <p className="text-4xl font-bold text-skyup-teal">{item.stat}</p>
            <p className="text-white/70 mt-2 text-sm md:text-base">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* -----------------------------------------------------
          FINAL CTA (OPTIONAL)
      ------------------------------------------------------ */}
      <div className="text-center mt-20">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          href="/courses"
          className="btn btn-primary px-10 py-4 text-lg"
        >
          Explore Courses
        </motion.a>
      </div>
    </section>
  );
}
