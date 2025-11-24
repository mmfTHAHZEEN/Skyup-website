import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  // useScroll gives scroll progress between 0 and 1
  const { scrollYProgress } = useScroll();

  // useSpring makes the movement smooth
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[4px] origin-left z-[9999] bg-gradient-to-r from-skyup-purple via-skyup-teal to-cyan-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.6)]"
    />
  );
}
