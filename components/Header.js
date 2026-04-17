import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h2>Mon Portfolio</h2>

      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/testimonials">Témoignages</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Inscription</Link>
      </nav>
    </header>
  );
}