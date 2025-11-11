import { motion } from "framer-motion";
import { Figma, PenTool, Terminal, Sparkles } from "lucide-react";

const tools = [
  { name: "Canva Pro", icon: <PenTool /> },
  { name: "WordPress Premium", icon: <Terminal /> },
  { name: "ChatGPT Pro", icon: <Sparkles /> },
  { name: "Free Software Library", icon: <Figma /> },
  { name: "Fiverr Freelance Tools", icon: <PenTool /> },
  { name: "SEO Keyword Kit", icon: <Sparkles /> },
  { name: "Adobe Illustrator", icon: <Figma /> },
  { name: "UI/UX Templates", icon: <PenTool /> },
  { name: "AI Tools", icon: <Sparkles /> },
];

export default function Tools() {
  return (
    <section className="mx-auto max-w-7xl px-4 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        SkyUp <span className="text-skyup-teal">Tools</span>
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="glass flex flex-col items-center p-6 hover:scale-[1.03] transition-all"
          >
            <div className="text-4xl mb-3">{tool.icon}</div>
            <h3 className="font-semibold text-lg">{tool.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
