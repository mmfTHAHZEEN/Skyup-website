import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="relative z-[20] p-10 text-white min-h-[80vh]">
            <h1 className="text-4xl font-bold mb-6">Welcome to your Dashboard</h1>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg shadow-xl mb-6">
                <h2 className="text-2xl font-semibold text-skyup-teal">Your Profile</h2>
                <p className="mt-3">Email: user@example.com</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg shadow-xl">
                <h2 className="text-2xl font-semibold text-skyup-teal">Your Courses</h2>
                <p className="mt-3 text-white/70">You are not enrolled in any courses yet.</p>
            </div>
        </div>
    );
}

