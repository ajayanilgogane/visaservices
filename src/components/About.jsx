export default function About() {
  return (
    <>
      {/* ================= ABOUT / SERVICES ================= */}
      <section
        id="about"
        style={{
          position: "relative",
          padding: "80px 20px 50px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.55)), url('/service-bg.png')",
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
            <p style={labelStyle}>WHAT WE DO</p>
            <h2 style={headingStyle}>Services We Provide</h2>

            <p style={aboutPara}>
              We provide professional travel and visa services for individuals,
              corporate clients, and global industries including
              <strong> Waaree Energies Limited, TATA Power, Vikram Solar</strong>.
            </p>

            <p style={aboutPara}>
              We are specialized in <strong>Visa Extension</strong>, documentation,
              business travel, and long-term assignments.
            </p>

            <ul style={{ listStyle: "none", padding: 0 }}>
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

      {/* ================= FOUNDER TALK ================= */}
      <section
        id="founder"
        style={{
          padding: "60px 20px",
          background: "#bdafafff",
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

          <div style={{ flex: "2", minWidth: "280px" }}>
            <h2 style={{ fontSize: "30px", fontWeight: "700" }}>
              Founder’s Talk
            </h2>

            <p style={quoteStyle}>
              “My journey began with a dead-end job and finished with me climbing
              new heights as a startup founder.”
            </p>

            <p style={founderPara}>
              From a seasoned travel agent to an IATA-certified professional,
              I built <strong>Lata Travels</strong> with trust and expertise.
            </p>

            <p style={founderPara}>
              Our mission is to simplify international travel by offering
              transparent guidance, timely processing, and dependable support
              at every step.
            </p>

            <p style={{ fontWeight: "700" }}>
              Jeshikha Lata Joshii –{" "}
              <span style={{ fontWeight: "400" }}>Lata Travels</span>
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEGAL & CERTIFICATIONS ================= */}
      <section
        id="legal"
        style={{
          padding: "45px 20px",
          background: "#ffffff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "14px",  color: "#333",}}>
            Legal Information & Certifications
          </h3>

         <img
          src="/IATA.png"
          alt="IATA Certificate"
          style={{
            width: "200px",
            height: "100px",
            margin: "0 auto 12px",
            display: "block",
            border: "2px solid #000",   // thick black border
            borderRadius: "6px",        // optional: slightly rounded corners
            padding: "6px",             // space between image and border
            backgroundColor: "#fff",    // keeps logo clean
          }}
        />

          <p style={{ fontSize: "14px", marginBottom: "14px" }}>
            IATA / UFTAA Certified Travel Professional
          </p>

          {/* LEGAL INFO CARD */}
          <div
            style={{
              margin: "0 auto",
              maxWidth: "360px",
              padding: "16px",
              background: "#f8c7c7ff",
              borderRadius: "8px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              fontSize: "14px",
              lineHeight: "1.7",
              textAlign: "left",
               color: "#333",
            }}
          >
            <p><strong>Legal Name:</strong> Hemlata Kirit Joshi</p>
            <p><strong>Trade Name:</strong> Lata Travels</p>
            <p><strong>GSTIN:</strong> 27AHGPJ2858N1ZT</p>
          </div>
        </div>
      </section>

      {/* ================= COUNTRIES WE SERVE ================= */}
      <section
        style={{
          padding: "40px 20px",
          background: "#877777c4",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "10px" }}>
          Countries We Serve
        </h3>

        <p style={{ fontSize: "14px",  color: "#333", marginBottom: "22px" }}>
          We proudly provide visa and travel services for multiple destinations worldwide.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
             color: "#333",
          }}
        >
          {[
            { name: "USA", img: "/usa.png" },
            { name: "China", img: "/china.png" },
            { name: "Germany", img: "/germany.png" },
            { name: "Australia", img: "/australia.jpeg" },
            { name: "United Kingdom", img: "/uk.jpeg" },
            { name: "Vietnam", img: "/vietnam.jpeg" },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                width: "110px",
                padding: "14px",
                borderRadius: "10px",
                background: "#fff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={c.img}
                alt={c.name}
                style={{
                  width: "60px",
                  height: "40px",
                  objectFit: "cover",
                  marginBottom: "8px",
                }}
              />
              <h4 style={{ fontSize: "13px", fontWeight: "600" }}>
                {c.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RESPONSIVE ================= */}
      <style>
        {`
          @media (max-width: 768px) {
            section {
              padding: 40px 20px !important;
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

/* ===== STYLES ===== */
const labelStyle = {
  color: "#ff0000",
  fontSize: "13px",
  letterSpacing: "1px",
  fontWeight: "600",
};

const headingStyle = {
  fontSize: "32px",
  fontWeight: "700",
};

const aboutPara = {
  fontSize: "15px",
  lineHeight: "1.7",
  opacity: 0.95,
};

const founderPara = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#444",
};

const quoteStyle = {
  fontStyle: "italic",
  fontSize: "16px",
  color: "#333",
};

const listItem = {
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
  fontSize: "15px",
};
