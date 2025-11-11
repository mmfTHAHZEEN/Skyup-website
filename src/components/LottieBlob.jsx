import Lottie from "react-lottie-player";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import blob from "../assets/blob.json"; // ✅ Make sure blob.json exists in src/assets/

export default function LottieBlob() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const handle = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  const tx = useTransform(mx, (v) => v * 40);
  const ty = useTransform(my, (v) => v * 40);

  return (
    <motion.div
      style={{ x: tx, y: ty }}
      className="absolute inset-0 -z-10 opacity-60 pointer-events-none"
    >
      <Lottie
        loop
        play
        speed={0.7}
        animationData={blob}
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
}
