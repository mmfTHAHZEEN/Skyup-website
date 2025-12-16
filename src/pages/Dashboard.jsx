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
import { tools as toolsData } from "../data/tools";

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
    const [myTools, setMyTools] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (!user) {
                setLoading(false);
                return;
            }

            /* ---------- COURSES ---------- */
            const courseQ = query(
                collection(db, "enrollments"),
                where("userId", "==", user.uid)
            );

            const enrollSnap = await getDocs(courseQ);
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

            /* ---------- TOOLS ---------- */
            const toolQ = query(
                collection(db, "toolEnrollments"),
                where("userId", "==", user.uid)
            );

            const toolSnap = await getDocs(toolQ);

            const toolsDataResolved = toolSnap.docs
                .map(d =>
                    toolsData.find(t => t.id === d.data().toolId)
                )
                .filter(Boolean);

            setMyCourses(coursesData);
            setMyTools(toolsDataResolved);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading your dashboard...
            </div>
        );
    }

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

                {/* ================= COURSES ================= */}
                {myCourses.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass rounded-3xl p-14 text-center max-w-3xl mx-auto mb-24"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Your learning journey starts here 🚀
                        </h2>
                        <p className="text-white/70 mb-8">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                        {myCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/40 rounded-full p-2">
                                        <ProgressRing progress={course.progress} />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold">{course.title}</h3>
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

                {/* ================= TOOLS ================= */}
                <h2 className="text-3xl font-bold mb-8">
                    My <span className="text-skyup-teal">Tools</span>
                </h2>

                {myTools.length === 0 ? (
                    <div className="glass rounded-3xl p-10 text-center max-w-xl">
                        <p className="text-white/70 mb-6">
                            You haven’t accessed any tools yet.
                        </p>
                        <button
                            onClick={() => navigate("/tools")}
                            className="btn btn-primary px-8 py-3"
                        >
                            Explore Tools
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {myTools.map((tool, index) => (
                            <motion.div
                                key={tool.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="glass rounded-3xl overflow-hidden"
                            >
                                <img
                                    src={tool.image}
                                    alt={tool.title}
                                    className="h-40 w-full object-cover"
                                />

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold">{tool.title}</h3>
                                    <p className="text-white/60 text-sm mt-1">
                                        Access Active
                                    </p>

                                    <button
                                        onClick={() => navigate(`/tools/${tool.id}`)}
                                        className="btn btn-primary w-full mt-6"
                                    >
                                        Open Tool
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
