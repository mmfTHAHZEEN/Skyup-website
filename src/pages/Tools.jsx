import { motion } from "framer-motion";
import { tools } from "../data/tools";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { enrollTool } from "../services/toolEnrollment";
import { useEffect, useMemo, useState } from "react";

export default function Tools() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  // Mobile "read more"
  const MOBILE_VISIBLE_COUNT = 4;
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setLoggedIn(!!user));
    return () => unsub();
  }, []);

  // Detect mobile (< 640px which is Tailwind "sm")
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);

    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Reset read-more state when leaving mobile
  useEffect(() => {
    if (!isMobile) setShowAllMobile(false);
  }, [isMobile]);

  const visibleTools = useMemo(() => {
    if (!isMobile) return tools;
    return showAllMobile ? tools : tools.slice(0, MOBILE_VISIBLE_COUNT);
  }, [isMobile, showAllMobile]);

  const handleToolClick = async (toolId) => {
    const user = auth.currentUser;

    if (!user) {
      navigate(`/login?from=${encodeURIComponent(`/tools/${toolId}`)}`);
      return;
    }

    // enroll (your existing behavior)
    await enrollTool(user.uid, toolId);

    // go to details
    navigate(`/tools/${toolId}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Tools & <span className="text-skyup-teal">Resources</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleTools.map((tool, i) => {
          const locked = !loggedIn;

          return (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden"
            >
              {/* IMAGE (blur if locked) */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="h-48 w-full object-cover"
                  style={{
                    filter: locked ? "blur(10px)" : "none",
                    transform: locked ? "scale(1.08)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                />

                {/* Overlay */}
                {locked && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                  >
                    <span className="text-sm px-4 py-2 rounded-full border border-white/30 bg-black/50">
                      Login to unlock
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{tool.title}</h3>

                {!locked && (
                  <>
                    <p className="text-white/70 text-sm mt-2">{tool.desc}</p>

                    <button
                      onClick={() => handleToolClick(tool.id)}
                      className="btn btn-primary w-full mt-6"
                    >
                      View Details
                    </button>
                  </>
                )}

                {locked && (
                  <button
                    onClick={() =>
                      navigate(
                        `/login?from=${encodeURIComponent(`/tools/${tool.id}`)}`
                      )
                    }
                    className="w-full mt-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition"
                  >
                    Login to Access
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Read More / Show Less */}
      {isMobile && tools.length > MOBILE_VISIBLE_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAllMobile((v) => !v)}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition"
          >
            {showAllMobile ? "Show Less" : "Read More"}
          </button>
        </div>
      )}
    </section>
  );
}
