"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/authSlice";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    setMessage(data.message);
    setIsError(!res.ok);

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redux
      dispatch(setUser(data.user));

      setTimeout(() => {
        router.push("/projects");
      }, 1000);
    }
  }

  return (
    <div className="form-container">
      <h1>Connexion</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Se connecter</button>
      </form>

      {message && (
        <p className={isError ? "error" : "success"}>
          {message}
        </p>
      )}
    </div>
  );
}