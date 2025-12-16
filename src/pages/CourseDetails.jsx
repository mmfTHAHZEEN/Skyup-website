import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

/* -------------------- Course Details Data -------------------- */
const courseDetails = {
    "it-statistics": {
        title: "IT Statistics & Data Science",
        description:
            "Master statistics, data analysis, and data-driven decision making with real-world projects.",
        syllabus: [
            "Statistics Fundamentals",
            "Python for Data Science",
            "Data Visualization",
            "Machine Learning Basics",
            "Final Project",
        ],
        duration: "6 Months",
        level: "Beginner → Advanced",
    },

    illustrator: {
        title: "Adobe Illustrator for Graphic Design",
        description:
            "Learn professional vector design techniques used in branding and digital design.",
        syllabus: [
            "Illustrator Interface",
            "Typography",
            "Logo Design",
            "Brand Assets",
            "Portfolio Project",
        ],
        duration: "3 Months",
        level: "Beginner",
    },

    seo: {
        title: "SEO for Your Home-Based Business",
        description:
            "Learn how to rank websites, attract organic traffic, and grow your business online.",
        syllabus: [
            "SEO Fundamentals",
            "Keyword Research",
            "On-Page SEO",
            "Off-Page SEO",
            "Analytics & Reporting",
        ],
        duration: "2 Months",
        level: "Beginner",
    },

    freelancing: {
        title: "Advanced Freelancing Strategies",
        description:
            "Build a sustainable freelancing career with high-value clients and proven systems.",
        syllabus: [
            "Freelancing Platforms",
            "Client Communication",
            "Pricing Strategies",
            "Proposal Writing",
            "Scaling Your Freelance Business",
        ],
        duration: "2 Months",
        level: "Intermediate",
    },

    "fiverr-upwork": {
        title: "Fiverr & Upwork Profile Building",
        description:
            "Create high-converting profiles and land your first freelance clients fast.",
        syllabus: [
            "Profile Optimization",
            "Gig Creation",
            "Bidding Strategies",
            "Client Handling",
            "Reviews & Growth",
        ],
        duration: "1 Month",
        level: "Beginner",
    },

    "graphic-design": {
        title: "Graphic Design Fundamentals",
        description:
            "Learn design principles, typography, and visual communication from scratch.",
        syllabus: [
            "Design Basics",
            "Color Theory",
            "Typography",
            "Layouts & Grids",
            "Design Projects",
        ],
        duration: "3 Months",
        level: "Beginner",
    },
};

/* -------------------- Course Details Page -------------------- */

export default function CourseDetails() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [tab, setTab] = useState("overview");

    const course = courseDetails[courseId];

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Course not found
            </div>
        );
    }

    return (
        <section className="min-h-screen px-6 md:px-16 py-20 text-white">

            {/* TITLE */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-4"
            >
                {course.title}
            </motion.h1>

            <p className="text-white/70 max-w-3xl mb-10">
                {course.description}
            </p>

            {/* TABS */}
            <div className="flex gap-4 mb-10 flex-wrap">
                {["overview", "curriculum", "instructor"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`px-5 py-2 rounded-full capitalize transition-all duration-300
              ${tab === t
                                ? "bg-skyup-teal text-black"
                                : "glass hover:bg-white/10"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* TAB CONTENT */}
            {tab === "overview" && (
                <div className="glass p-6 rounded-2xl max-w-3xl">
                    <p>{course.description}</p>
                    <p className="mt-4">⏳ Duration: {course.duration}</p>
                    <p>🎯 Level: {course.level}</p>
                </div>
            )}

            {tab === "curriculum" && (
                <div className="glass p-6 rounded-2xl max-w-3xl">
                    <ul className="list-decimal ml-6 space-y-2">
                        {course.syllabus.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {tab === "instructor" && (
                <div className="glass p-6 rounded-2xl max-w-3xl">
                    <p className="font-semibold text-lg">
                        Industry Expert Instructor
                    </p>
                    <p className="text-white/70 mt-2">
                        10+ years of real-world experience, practical projects, and
                        professional mentorship.
                    </p>
                </div>
            )}

            {/* ENROLL BUTTON */}
            <button
                onClick={() => navigate("/login")}
                className="btn btn-primary mt-12 px-10 py-3 text-lg shadow-lg"
            >
                Enroll & Start Learning
            </button>
        </section>
    );
}
