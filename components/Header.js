"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("user");
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

        
        <span
          onClick={handleLogout}
          style={{ marginLeft: "10px", cursor: "pointer", color: "white" }}
        >
          Déconnexion
        </span>
      </nav>
    </header>
  );
}