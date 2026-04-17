export default function Home() {
  return (
    <div className="home">

      <img src="/photo.jpg" alt="photo" className="profile-img" />

      <h1>Bonjour, je suis Faycal Bouifrou</h1>

      <p className="intro">
        Étudiant en programmation informatique à La Cité.
        Passionné par le développement web et les nouvelles technologies.
      </p>

      <h2>Mes compétences</h2>

      <ul className="skills">
        <li>HTML / CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Redux</li>
        <li>API REST</li>
      </ul>
    </div>
  );
}