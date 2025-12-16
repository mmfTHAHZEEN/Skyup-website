import { motion } from "framer-motion";
import { tools } from "../data/tools";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { enrollTool } from "../services/toolEnrollment";

export default function Tools() {
  const navigate = useNavigate();

  const handleViewDetails = async (toolId) => {
    const user = auth.currentUser;

    // ❌ Not logged in
    if (!user) {
      navigate("/signup");
      return;
    }

    // ✅ Enroll tool automatically
    await enrollTool(user.uid, toolId);

    // ➜ Go to tool details
    navigate(`/tools/${toolId}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Tools & <span className="text-skyup-teal">Resources</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-3xl overflow-hidden hover:scale-[1.03] transition"
          >
            <img
              src={tool.image}
              alt={tool.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">{tool.title}</h3>
              <p className="text-white/70 text-sm mt-2">{tool.desc}</p>

              <button
                onClick={() => handleViewDetails(tool.id)}
                className="btn btn-primary w-full mt-6"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
