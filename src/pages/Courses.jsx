import { motion } from "framer-motion";

const courses = [
  {
    title: "IT Statistics & Data Science",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
  },
  {
    title: "Adobe Illustrator for Graphic Design",
    img: "https://images.unsplash.com/photo-1587614382346-4ec65b7d3a9f?q=80&w=1200",
  },
  {
    title: "SEO for Your Home-Based Business",
    img: "https://images.unsplash.com/photo-1581093458791-9b6c9737e9d7?q=80&w=1200",
  },
  {
    title: "Advanced Freelancing Strategies",
    img: "https://images.unsplash.com/photo-1581092334651-3c7d1f2d6b67?q=80&w=1200",
  },
  {
    title: "Fiverr & Upwork Profile Building",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200",
  },
  {
    title: "Graphic Design Fundamentals",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
  },
];

export default function Courses() {
  return (
    <section className="mx-auto max-w-7xl px-4 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        SkyUp <span className="text-skyup-teal">Courses</span>
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass overflow-hidden hover:scale-[1.02] transition-all"
          >
            <img
              src={course.img}
              alt={course.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">{course.title}</h3>
              <p className="text-white/80 text-sm mt-2">
                Learn from industry professionals and build real-world skills.
              </p>
              <button className="btn btn-primary mt-4 w-full">Enroll Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
