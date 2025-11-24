import { motion } from "framer-motion";

export default function BubbleField() {
  // generate 25 random bubbles
  const bubbles = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {bubbles.map((_, i) => {
        const size = Math.random() * 120 + 40; // random between 40–160px
        const x = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 10 + Math.random() * 10;
        const color = Math.random() > 0.5 ? "bg-bubble-purple" : "bg-bubble-white";

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${color} blur-3xl opacity-30`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              bottom: `${Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -60, 0],
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
