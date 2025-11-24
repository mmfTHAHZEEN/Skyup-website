import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "#" },
    { label: "About", to: "#about" },
    { label: "Courses", to: "#courses" },
    { label: "Tools", to: "#tools" },
    { label: "Testimonials", to: "#testimonials" },
    { label: "Contact", to: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
        
        {/* LOGO */}
        <a href="/" className="text-2xl font-bold text-white">
          <span className="text-skyup-teal">Sky</span>Up
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white/80 font-medium">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.to}
              className="hover:text-white transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/login"
            className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-skyup-purple to-skyup-teal text-white font-semibold shadow hover:opacity-90 transition"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/10 text-white/90 py-4"
        >
          <div className="flex flex-col gap-4 text-center font-medium">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.to}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/login"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-skyup-purple to-skyup-teal text-white w-40 mx-auto mt-3"
              onClick={() => setOpen(false)}
            >
              Login
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
