import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    getDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* ---------- Progress Ring Component ---------- */
function ProgressRing({ progress }) {
    const radius = 34;
    const stroke = 5;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
        circumference - (progress / 100) * circumference;

    return (
        <svg height={radius * 2} width={radius * 2}>
            <circle
                stroke="rgba(255,255,255,0.15)"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke="#4fd1c5"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${circumference} ${circumference}`}
                style={{ strokeDashoffset }}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="600"
            >
                {progress}%
            </text>
        </svg>
    );
}

/* ---------- Dashboard ---------- */
export default function Dashboard() {
    const [myCourses, setMyCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (!user) {
                setMyCourses([]);
                setLoading(false);
                return;
            }

            const q = query(
                collection(db, "enrollments"),
                where("userId", "==", user.uid)
            );

            const enrollSnap = await getDocs(q);
            const coursesData = [];

            for (const docSnap of enrollSnap.docs) {
                const { courseId } = docSnap.data();
                const courseRef = doc(db, "courses", courseId);
                const courseSnap = await getDoc(courseRef);

                if (courseSnap.exists()) {
                    coursesData.push({
                        id: courseSnap.id,
                        progress: 5,
                        ...courseSnap.data(),
                    });
                }
            }

            setMyCourses(coursesData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);




    return (
        <section className="min-h-screen px-6 py-16 text-white">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold">
                        My <span className="text-skyup-teal">Learning</span>
                    </h1>
                    <p className="text-white/60 mt-3 max-w-xl">
                        Track your progress and continue learning at your own pace.
                    </p>
                </motion.div>

                {/* EMPTY STATE */}
                {myCourses.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass rounded-3xl p-14 text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Your learning journey starts here 🚀
                        </h2>
                        <p className="text-white/70 mb-8 max-w-xl mx-auto">
                            Enroll in expert-led courses and start building real-world skills today.
                        </p>
                        <button
                            onClick={() => navigate("/courses")}
                            className="btn btn-primary px-10 py-3 text-lg"
                        >
                            Browse Courses
                        </button>
                    </motion.div>
                ) : (

                    /* COURSE GRID */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {myCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
                            >
                                {/* IMAGE + PROGRESS RING */}
                                <div className="relative h-48">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute top-4 right-4 backdrop-blur-md bg-black/40 rounded-full p-2">
                                        <ProgressRing progress={course.progress} />
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold">
                                        {course.title}
                                    </h3>

                                    <p className="text-white/65 text-sm mt-2 line-clamp-2">
                                        {course.description}
                                    </p>

                                    <button
                                        onClick={() => navigate(`/courses/${course.id}`)}
                                        className="btn btn-primary w-full mt-6"
                                    >
                                        Continue Learning
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
