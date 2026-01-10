import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase"; // adjust only if your firebase file path differs

export default function RequireAuth({ children }) {
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
      setChecking(false);
    });

    return () => unsub();
  }, []);

  if (checking) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white/70">
        Checking authentication...
      </div>
    );
  }

  if (!user) {
    const from = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/login?from=${from}`} replace />;
  }

  return children;
}
