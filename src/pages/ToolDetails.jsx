import { useParams, useNavigate } from "react-router-dom";
import { tools } from "../data/tools";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

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

    return (
        <section className="max-w-4xl mx-auto px-6 py-20 text-white">
            <h1 className="text-4xl font-bold mb-4">{tool.title}</h1>
            <p className="text-white/70 mb-6">{tool.desc}</p>

            <div className="glass p-6 rounded-2xl">
                <p className="text-lg mb-2">
                    <strong>Access:</strong> Active
                </p>
                <p>
                    <strong>Price:</strong> {tool.price}
                </p>
            </div>
        </section>
    );
}
