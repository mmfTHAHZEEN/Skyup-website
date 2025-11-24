import { motion } from "framer-motion";

/* -------------------- Course Data -------------------- */
const courses = [
  {
    title: "WORDPRESS",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
  },
  {
    title: "FIVERR",
    img: "https://images.unsplash.com/photo-1587614382346-4ec65b7d3a9f?q=80&w=1200",
  },
  {
    title: "FREELANCE",
    img: "https://images.unsplash.com/photo-1581093458791-9b6c9737e9d7?q=80&w=1200",
  },
  {
    title: "UI/UX DESIGN",
    img: "https://images.unsplash.com/photo-1581092334651-3c7d1f2d6b67?q=80&w=1200",
  },
  {
    title: "WEB DEVELOPMENT",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200",
  },
  {
    title: "Graphic Design",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
  },
];

/* -------------------- Courses Page -------------------- */

export default function Courses() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-20 text-white">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14"
      >
        SkyUp <span className="text-skyup-teal">Courses</span>
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-md"
          >
            {/* Image */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-xl tracking-wide">
                {course.title}
              </h3>

              <p className="text-white/70 text-sm mt-3 leading-relaxed">
                Learn from industry professionals and build real-world skills.
              </p>

              <button
                className="btn btn-primary mt-6 w-full shadow-lg hover:shadow-skyup-teal/30"
                type="button"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
