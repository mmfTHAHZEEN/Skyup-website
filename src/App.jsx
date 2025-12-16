import { Routes, Route, useLocation } from "react-router-dom";
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
import Auth from "./pages/Auth";
import Instructors from "./pages/Instructors.jsx";
import EventsSection from "./components/EventsSection.jsx";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./pages/RequireAuth";
import CourseDetails from "./pages/CourseDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import ToolDetails from "./pages/ToolDetails";

export default function App() {
  const location = useLocation();

  return (
    <>
      <GradientBG />
      <CursorGlow />
      <Navbar />
      <ScrollProgress />
      {/* AnimatePresence watches route changes */}
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
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/events" element={<EventsSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/tools/:toolId" element={<ToolDetails />} />

            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

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
              path="/courses"
              element={
                <RequireAuth>
                  <Courses />
                </RequireAuth>
              }
            />

            <Route
              path="/tools"
              element={
                <RequireAuth>
                  <Tools />
                </RequireAuth>
              }
            />

            <Route
              path="/instructors"
              element={
                <RequireAuth>
                  <Instructors />
                </RequireAuth>
              }
            />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}