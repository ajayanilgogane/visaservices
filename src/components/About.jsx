import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-overlay">
        
        {/* LEFT CONTENT */}
        <div className="about-card">
          <h2>ABOUT US</h2>

          <div className="about-line"></div>

          <p>
            We are the <strong>sole and authorized travel & visa services partner</strong>{" "}
            for <strong>Waaree Group</strong>, a globally recognized organization.
          </p>

          <p>
            We handle <strong>all travel-related services</strong> including visa processing,
            documentation, and end-to-end travel assistance for Waaree’s international operations.
          </p>

          <p>
            With Waaree’s worldwide presence, we proudly provide visa and travel services
            for the following countries:
          </p>

          <div className="country-flags">
            <div className="flag-item">
              <img src="/usa.png" alt="USA" />
              <span>USA</span>
            </div>

            <div className="flag-item">
              <img src="/china.png" alt="China" />
              <span>China</span>
            </div>

            <div className="flag-item">
              <img src="/germany.png" alt="Germany" />
              <span>Germany</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img src="/company.png" alt="Company" />
        </div>

      </div>
    </section>
  );
}
