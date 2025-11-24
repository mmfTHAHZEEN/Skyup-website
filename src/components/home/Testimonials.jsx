import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Testimonials({ testimonials }) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold mb-12"
      >
        What Our <span className="text-skyup-teal">Students Say</span>
      </motion.h2>

      <Marquee pauseOnHover gradient={false} speed={40}>
        {testimonials.map((t, i) => (
          <div key={i} className="glass p-6 rounded-3xl mx-4 w-[310px] bg-white/10 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full border-white/40 border-2" />
              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-white/60 text-sm">{t.role}</p>
              </div>
            </div>
            <p className="text-white/80 text-sm italic">“{t.quote}”</p>
          </div>
        ))}
      </Marquee>

      <p className="text-center mt-6 text-white/50 text-sm">(Hover to pause the scrolling)</p>
    </section>
  );
}
