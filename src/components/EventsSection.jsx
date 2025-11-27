import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { events } from "../data/events";

export default function EventsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 mt-20 text-white overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold mb-12"
      >
        SkyUp <span className="text-skyup-teal">Events & Highlights</span>
      </motion.h2>

      <Marquee pauseOnHover gradient={false} speed={40} className="gap-6">
        {events.map((item, i) => (
          <div
            key={i}
            className="glass p-4 rounded-3xl mx-4 w-[340px] h-[350px] backdrop-blur-md bg-white/10 relative overflow-hidden"
          >
            {/* Media (Image OR Video) */}
            <div className="rounded-2xl overflow-hidden h-[200px] w-full mb-3">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>

            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
