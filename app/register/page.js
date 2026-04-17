export default function RegisterPage() {
  return (
    <div className="form-container">
      <h1>Inscription</h1>

      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}