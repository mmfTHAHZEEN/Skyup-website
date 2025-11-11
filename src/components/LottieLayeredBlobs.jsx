import Lottie from "react-lottie-player";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import blobBlue from "../assets/blobBlue.json";
import blobTeal from "../assets/blobTeal.json";
import blobPink from "../assets/blobPink.json";

export default function LottieLayeredBlobs() {
  // Mouse parallax control
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const handleMouse = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mx, my]);

  // Smooth parallax transforms
  const tx = useTransform(mx, (v) => v * 60);
  const ty = useTransform(my, (v) => v * 60);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blue Layer */}
      <motion.div
        style={{ x: tx, y: ty, rotate: 5 }}
        className="absolute top-[-20%] left-[-10%] w-[120%] opacity-50 mix-blend-screen"
      >
        <Lottie play loop speed={0.6} animationData={blobBlue} />
      </motion.div>

      {/* Teal Layer */}
      <motion.div
        style={{ x: tx, y: ty, rotate: -8 }}
        className="absolute bottom-[-15%] right-[-10%] w-[110%] opacity-40 mix-blend-screen"
      >
        <Lottie play loop speed={0.8} animationData={blobTeal} />
      </motion.div>

      {/* Pink Layer */}
      <motion.div
        style={{ x: ty, y: tx, rotate: 12 }}
        className="absolute top-[10%] right-[15%] w-[100%] opacity-35 mix-blend-screen"
      >
        <Lottie play loop speed={0.5} animationData={blobPink} />
      </motion.div>
    </div>
  );
}
