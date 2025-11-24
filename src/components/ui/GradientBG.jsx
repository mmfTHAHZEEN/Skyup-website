import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import blobBlue from "../../assets/blobBlue.json";
import blobPink from "../../assets/blobPink.json";
import blobTeal from "../../assets/blobTeal.json";


export default function GradientBG() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const handle = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const tx = useTransform(mx, (v) => v * 40);
  const ty = useTransform(my, (v) => v * 40);

  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      <motion.div
        style={{ x: tx, y: ty }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-teal-400/40 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 left-20 h-96 w-96 bg-purple-400/40 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-10 right-20 h-[500px] w-[500px] bg-teal-400/40 rounded-full blur-[120px]"
      />
    </div>
  );
}
