import { motion } from "framer-motion";

/* -------------------- Instructor Data -------------------- */
const instructors = [
  {
    name: "Michael Hammond",
    role: "Instructor",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Cheryl Curry",
    role: "Instructor",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Willie Diaz",
    role: "Instructor",
    img: "https://randomuser.me/api/portraits/men/84.jpg",
  },
  {
    name: "Jimmy Sifuentes",
    role: "Instructor",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Justin Clark",
    role: "Instructor",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Ann Dooley",
    role: "Instructor",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "Walter Skeete",
    role: "Instructor",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Sara Young",
    role: "Instructor",
    img: "https://randomuser.me/api/portraits/women/58.jpg",
  },
];

/* -------------------- Instructors Page -------------------- */

export default function Instructors() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-20 text-white">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14"
      >
        Meet Our <span className="text-skyup-teal">Instructors</span>
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {instructors.map((ins, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden backdrop-blur-md hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={ins.img}
                alt={ins.name}
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>

            {/* Details */}
            <div className="p-6 text-center">
              <h3 className="font-semibold text-xl">{ins.name}</h3>
              <p className="text-white/60 text-sm mt-1">{ins.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
