import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import GradientBG from "./components/ui/GradientBG.jsx";
import CursorGlow from "./components/ui/CursorGlow.jsx";
import ScrollProgress from "./components/ui/ScrollProgress.jsx";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Instructors from "./pages/Instructors.jsx";
import EventsSection from "./components/EventsSection.jsx";
import Dashboard from "./pages/Dashboard";

import CourseDetails from "./pages/CourseDetails";
import ToolDetails from "./pages/ToolDetails";

import RequireAuth from "./pages/RequireAuth";
import Login from "./pages/Login"; // ensure this path matches your project

export default function App() {
  const location = useLocation();

  return (
    <>
      <GradientBG />
      <CursorGlow />
      <Navbar />
      <ScrollProgress />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="pt-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Routes location={location} key={location.pathname}>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/events" element={<EventsSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/instructors" element={<Instructors />} />

            {/* Login */}
            <Route path="/login" element={<Login />} />
            {/* Optional: keep /auth working if you already use it */}
            <Route path="/auth" element={<Navigate to="/login" replace />} />

            {/* Protected */}
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/courses/:courseId"
              element={
                <RequireAuth>
                  <CourseDetails />
                </RequireAuth>
              }
            />
            <Route
              path="/tools/:toolId"
              element={
                <RequireAuth>
                  <ToolDetails />
                </RequireAuth>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}
