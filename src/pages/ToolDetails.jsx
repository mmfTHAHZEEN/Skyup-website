import { useParams, useNavigate } from "react-router-dom";
import { tools } from "../data/tools";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { motion } from "framer-motion";

export default function ToolDetails() {
    const { toolId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const tool = tools.find((t) => t.id === toolId);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                navigate("/signup");
                return;
            }

            const ref = doc(db, "toolEnrollments", `${user.uid}_${toolId}`);
            const snap = await getDoc(ref);

            if (!snap.exists()) {
                navigate("/tools");
                return;
            }

            setLoading(false);
        });

        return () => unsub();
    }, [toolId, navigate]);

    if (!tool || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading tool access...
            </div>
        );
    }

    return (
        <section className="min-h-screen px-6 py-20 text-white">
            <div className="max-w-6xl mx-auto">

                {/* HERO IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative rounded-3xl overflow-hidden mb-14"
                >
                    <img
                        src={tool.image}
                        alt={tool.title}
                        className="w-full h-[340px] object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />

                    {/* Title */}
                    <div className="absolute bottom-8 left-8">
                        <span className="inline-block mb-3 px-4 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                            ✅ Access Active
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold">
                            {tool.title}
                        </h1>
                    </div>
                </motion.div>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT: DETAILS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-2 glass rounded-3xl p-10"
                    >
                        <h2 className="text-2xl font-semibold mb-4">
                            About this tool
                        </h2>

                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            {tool.desc}
                        </p>

                        <h3 className="text-xl font-semibold mb-4">
                            What you can do
                        </h3>

                        <ul className="space-y-3">
                            {tool.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="text-skyup-teal text-lg">✔</span>
                                    <span className="text-white/80">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* RIGHT: ACTION CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass rounded-3xl p-8 h-fit sticky top-24"
                    >
                        <h3 className="text-xl font-semibold mb-6">
                            Tool Access
                        </h3>

                        <div className="mb-6">
                            <p className="text-white/60 text-sm">Price</p>
                            <p className="text-2xl font-bold text-skyup-teal">
                                {tool.price}
                            </p>
                        </div>

                        <button
                            className="btn btn-primary w-full py-3 text-lg mb-4"
                            onClick={() => window.open("#", "_blank")}
                        >
                            Launch Tool 🚀
                        </button>

                        <button
                            className="btn btn-ghost w-full"
                            onClick={() => navigate("/dashboard")}
                        >
                            Go to Dashboard
                        </button>

                        <p className="text-white/40 text-xs text-center mt-6">
                            Access provided via SkyUp Campus
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
