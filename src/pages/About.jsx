import { motion } from "framer-motion";

const team = [
  { name: "Michael Hammond", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Cheryl Curry", img: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Willie Diaz", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Jimmy Sifuentes", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Justin Clark", img: "https://randomuser.me/api/portraits/men/5.jpg" },
  { name: "Ann Dooley", img: "https://randomuser.me/api/portraits/women/6.jpg" },
  { name: "Walter Skeete", img: "https://randomuser.me/api/portraits/men/7.jpg" },
  { name: "Sara Young", img: "https://randomuser.me/api/portraits/women/8.jpg" },
];

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Meet Our <span className="text-skyup-teal">Instructors</span>
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="glass overflow-hidden hover:scale-[1.02] transition-all text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-white/70">Instructor</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
