import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [visible, setVisible] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring follow
  const x = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 75);
      mouseY.set(e.clientY - 75);
    };
    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
        opacity: visible ? 0.35 : 0,
        background:
          "radial-gradient(120px at center, rgba(100, 181, 246, 0.45), rgba(111,82,237,0.25), transparent 80%)",
      }}
      className="fixed w-[150px] h-[150px] rounded-full blur-3xl pointer-events-none z-[9998] mix-blend-screen"
    />
  );
}
