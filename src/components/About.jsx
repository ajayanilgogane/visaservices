export default function About() {
  return (
    <>
      {/* ================= ABOUT / SERVICES SECTION ================= */}
      <section
        id="about"
        style={{
          position: "relative",
          padding: "80px 20px 50px", // 🔽 reduced bottom gap
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0,0,0,0.55)), url('/service-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT IMAGES */}
          <div style={{ flex: "1", minWidth: "280px", position: "relative" }}>
            <img
              src="/services1.jpeg"
              alt="Visa Process"
              style={{
                width: "100%",
                maxWidth: "420px",
                borderRadius: "12px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
              }}
            />

            <img
              src="/services2.webp"
              alt="Global Services"
              style={{
                width: "65%",
                position: "absolute",
                bottom: "-35px",
                right: "-15px",
                borderRadius: "12px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <p
              style={{
                color: "#ff0000",
                fontSize: "13px",
                letterSpacing: "1px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              WHAT WE DO
            </p>

            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              Services We Provide
            </h2>

            <p style={aboutPara}>
              We provide professional travel and visa services for individuals,
              corporate clients, and worldwide solar industries including
              <strong> Waaree Energies</strong> and many other global solar companies.
            </p>

            <p style={aboutPara}>
              We are also <strong>specialized in Visa Extension</strong>,
              documentation, business travel, and long-term global assignments.
            </p>

            <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
              {[
                "Visa Services",
                "Holiday Packages",
                "Study Abroad",
                "Flight Tickets",
                "Travel Insurance",
                "Visa Extension Services",
              ].map((item, i) => (
                <li key={i} style={listItem}>
                  <span style={{ color: "#ff0000", marginRight: "10px" }}>✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= DIVIDER (MINIMAL GAP) ================= */}
      <div
        style={{
          height: "1px",
          background: "#ddd",
          maxWidth: "1100px",
          margin: "19px auto", // 🔽 reduced a lot
        }}
      />

      {/* ================= FOUNDER TALK ================= */}
      <section
        id="founder"
        style={{
          padding: "60px 20px", // 🔽 reduced
          background: "#544949b4",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          {/* IMAGE */}
          <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <img
              src="/profile.jpeg"
              alt="Founder"
              style={{
                width: "260px",
                height: "260px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
              }}
            />
          </div>

          {/* TEXT */}
          <div style={{ flex: "2", minWidth: "280px" }}>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              Founder’s Talk
            </h2>

            <p style={quoteStyle}>
              “My journey began with a dead-end job and finished with me climbing
              new heights as a startup founder.”
            </p>

            <p style={founderPara}>
              From a journey as a seasoned travel agent to acquiring a degree from
              the <strong> International Air Transport Association (IATA)</strong>,
              I ventured into entrepreneurship. My diverse background fuels
              Newland Travel, ensuring top-notch services.
            </p>

            <p style={{ fontWeight: "700", marginTop: "8px" }}>
              Lata –{" "}
              <span style={{ fontWeight: "400" }}>
                Lata Travels
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ================= RESPONSIVE ================= */}
      <style>
        {`
          @media (max-width: 768px) {
            #about, #founder {
              padding: 50px 20px !important;
              text-align: center;
            }

            #about img:nth-child(2) {
              display: none;
            }

            #founder img {
              width: 220px !important;
              height: 220px !important;
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </>
  );
}

/* ===== SHARED STYLES ===== */
const aboutPara = {
  fontSize: "15px",
  lineHeight: "1.7",
  opacity: 0.95,
  marginBottom: "16px",
};

const founderPara = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#444",
  marginBottom: "14px",
};

const quoteStyle = {
  fontStyle: "italic",
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#333",
  marginBottom: "14px",
};

const listItem = {
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
  fontSize: "15px",
};
