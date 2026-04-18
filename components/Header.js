"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "@/store/slices/authSlice";
import { useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  function handleLogout() {
    localStorage.removeItem("user");
    dispatch(clearUser());
    router.push("/login");
  }

  return (
    <header className="header">
      <h2>Mon Portfolio</h2>

      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/testimonials">Témoignages</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Inscription</Link>

        {user && (
          <span
            onClick={handleLogout}
            style={{ marginLeft: "10px", cursor: "pointer", color: "white" }}
          >
            Déconnexion
          </span>
        )}
      </nav>
    </header>
  );
}