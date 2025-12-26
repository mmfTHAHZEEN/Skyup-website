import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import logo from "../../assets/logo3.png";

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
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

function getFirstName(nameOrEmail) {
  if (!nameOrEmail) return "Student";
  if (nameOrEmail.includes("@")) return nameOrEmail.split("@")[0];
  return nameOrEmail.split(" ")[0];
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Listen to auth state
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsub();
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
    navigate("/");
  };

  const displayName = user?.displayName || user?.email || "Student";
  const firstName = getFirstName(displayName);

  // fallback avatar
  const avatar =
    user?.photoURL ||
    "https://api.dicebear.com/9.x/initials/png?seed=SkyUp&size=64";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="glass flex items-center justify-between px-5 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="SkyUp Logo"
              className="h-12 w-auto object-contain drop-shadow-md"
              style={{ marginTop: "-4px" }}
            />
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

            {/* AUTH AREA */}
            {!user ? (
              <Link to="/auth" className="btn btn-primary">
                Login
              </Link>
            ) : (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 transition"
                >
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-white text-sm font-medium">
                    {firstName}
                  </span>
                </button>

                {/* Profile Dropdown */}
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 overflow-hidden">
                    <button
                      className="w-full text-left px-4 py-3 hover:bg-white/10 text-white"
                      onClick={() => {
                        setProfileOpen(false);
                        navigate("/dashboard");
                      }}
                    >
                      Dashboard
                    </button>

                    <button
                      className="w-full text-left px-4 py-3 hover:bg-red-500/15 text-red-200"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-2 glass flex flex-col gap-2 p-3 md:hidden">
            <NavItem to="/" onClick={() => setOpen(false)}>Home</NavItem>
            <NavItem to="/courses" onClick={() => setOpen(false)}>Courses</NavItem>
            <NavItem to="/tools" onClick={() => setOpen(false)}>Tools</NavItem>
            <NavItem to="/events" onClick={() => setOpen(false)}>Events</NavItem>
            <NavItem to="/instructors" onClick={() => setOpen(false)}>Instructors</NavItem>
            <NavItem to="/about" onClick={() => setOpen(false)}>About</NavItem>
            <NavItem to="/contact" onClick={() => setOpen(false)}>Contact</NavItem>

            {!user ? (
              <Link
                to="/auth"
                className="btn btn-primary"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            ) : (
              <>
                <button
                  className="text-left px-3 py-2 rounded-md bg-white/10 text-white"
                  onClick={() => {
                    setOpen(false);
                    navigate("/dashboard");
                  }}
                >
                  Dashboard
                </button>
                <button
                  className="text-left px-3 py-2 rounded-md bg-red-500/15 text-red-200"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
