import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md transition ${
        isActive
          ? "bg-white/20 text-white"
          : "text-white/80 hover:text-white hover:bg-white/10"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="glass flex items-center justify-between px-5 py-3">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Sky<span className="text-skyup-teal">Up</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/courses">Courses</NavItem>
            <NavItem to="/tools">Tools</NavItem>
            <NavItem to="/events">Events</NavItem>
            <NavItem to="/instructors">Instructors</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <Link to="/auth" className="btn btn-primary">Login</Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-2 glass flex flex-col gap-2 p-3 md:hidden">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/courses">Courses</NavItem>
            <NavItem to="/tools">Tools</NavItem>
            <NavItem to="/tools">Events</NavItem>
            <NavItem to="/instructors">Instructors</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <Link to="/auth" className="btn btn-primary">Login</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
