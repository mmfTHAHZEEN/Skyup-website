import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

/* -------------------- Course Data -------------------- */
const courses = [
  {
    id: "it-statistics",
    title: "IT Statistics & Data Science",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
  },
  {
    id: "illustrator",
    title: "Adobe Illustrator for Graphic Design",
    img: "https://images.unsplash.com/photo-1587614382346-4ec65b7d3a9f?q=80&w=1200",
  },
  {
    id: "seo",
    title: "SEO for Your Home-Based Business",
    img: "https://images.unsplash.com/photo-1581093458791-9b6c9737e9d7?q=80&w=1200",
  },
  {
    id: "freelancing",
    title: "Advanced Freelancing Strategies",
    img: "https://images.unsplash.com/photo-1581092334651-3c7d1f2d6b67?q=80&w=1200",
  },
  {
    id: "fiverr-upwork",
    title: "Fiverr & Upwork Profile Building",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200",
  },
  {
    id: "graphic-design",
    title: "Graphic Design Fundamentals",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
  },
];

/* -------------------- Courses Page -------------------- */
export default function Courses() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setLoggedIn(!!user);
    });
    return () => unsub();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-20 text-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14"
      >
        SkyUp <span className="text-skyup-teal">Courses</span>
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, i) => {
          const locked = !loggedIn;

          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  style={{
                    filter: locked ? "blur(10px)" : "none",
                    transform: locked ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                {locked && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.45)",
                    }}
                  >
                    <span className="text-sm px-4 py-2 rounded-full border border-white/30 bg-black/50">
                      Login to unlock
                    </span>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* Title always visible */}
                <h3 className="font-semibold text-xl tracking-wide">
                  {course.title}
                </h3>

                {/* Only show when logged in */}
                {!locked && (
                  <>
                    <p className="text-white/70 text-sm mt-3">
                      Learn from industry professionals and build real-world skills.
                    </p>

                    <button
                      className="btn btn-primary mt-6 w-full"
                      onClick={() => navigate(`/courses/${course.id}`)}
                    >
                      Enroll Now
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
