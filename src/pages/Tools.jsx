import { motion } from "framer-motion";

/* -------------------- Tools List -------------------- */
const tools = [
  {
    title: "Canva Pro",
    desc: "Create stunning designs with templates and premium resources.",
    icon: "🎨",
  },
  {
    title: "ChatGPT & AI Tools",
    desc: "Boost productivity with AI-powered writing, research & coding tools.",
    icon: "🤖",
  },
  {
    title: "Notion Workspace",
    desc: "Organize projects, notes, tasks, and workflows effortlessly.",
    icon: "📘",
  },
  {
    title: "Figma",
    desc: "Design modern UI/UX layouts and collaborate with your team.",
    icon: "🖌️",
  },
  {
    title: "CapCut & Video Tools",
    desc: "Edit videos, create reels, and produce content easily.",
    icon: "🎬",
  },
  {
    title: "D-ID Avatar API",
    desc: "Generate AI avatars, video presenters, and talking characters.",
    icon: "🧑‍💻",
  },
  {
    title: "Google Workspace",
    desc: "Professional email, documents, spreadsheets & cloud storage.",
    icon: "📂",
  },
  {
    title: "OpenStreetMap API",
    desc: "Use mapping & location-based integrations for apps.",
    icon: "🗺️",
  },
];

/* -------------------- Tools Page -------------------- */

export default function Tools() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-20 text-white">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Tools & <span className="text-skyup-teal">Resources</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white/70 text-center max-w-3xl mx-auto mb-16 text-lg"
      >
        SkyUp provides premium tools and resources to help students learn, create,
        and build real-world projects with industry-standard software.
      </motion.p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl backdrop-blur-md hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 flex flex-col items-start"
          >
            {/* Icon */}
            <div className="text-4xl mb-5 bg-white/10 p-4 rounded-2xl shadow-inner">
              {tool.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>

            {/* Description */}
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              {tool.desc}
            </p>

            <button className="btn btn-primary w-full mt-auto shadow-lg hover:shadow-skyup-teal/40">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
