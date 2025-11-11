import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GradientBG from "./components/GradientBG";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

export default function App() {
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}