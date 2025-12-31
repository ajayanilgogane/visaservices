import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay">

        {/* LEFT CARD (unchanged) */}
        <div className="hero-card">
          <h1>
            Welcome to VISA <br /> Services
          </h1>

          <div className="hero-line"></div>

          <p>Facilitating Smooth Journeys</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src="/profile.jpeg" alt="Visa Consultant" />
        </div>

      </div>
    </section>
  );
}
