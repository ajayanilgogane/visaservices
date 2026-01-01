export default function ServicesSection() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "100px 20px",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.89), rgba(0,0,0,0.55)), url('/service-bg.png')",
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
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGES */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            position: "relative",
          }}
        >
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
              bottom: "-40px",
              right: "-20px",
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
              marginBottom: "10px",
            }}
          >
            WHAT WE DO
          </p>

          <h2
            style={{
              fontSize: "34px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Services We Provide
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
              opacity: 0.95,
              marginBottom: "20px",
            }}
          >
            We provide professional travel and visa services for individuals,
            corporate clients, and worldwide solar industries including
            <strong> Waaree Energies</strong> and many other global solar
            companies. Our expertise ensures seamless international mobility.
          </p>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
              opacity: 0.95,
              marginBottom: "20px",
            }}
          >
            We are also <strong>specialized in Visa Extension</strong>,
            documentation, business travel, and long-term global assignments.
          </p>

          {/* SERVICES LIST */}
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Visa Services",
              "Holiday Packages",
              "Study Abroad",
              "Flight Tickets",
              "Travel Insurance",
              "Visa Extension Services",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "15px",
                }}
              >
                <span style={{ color: "#ff0000", marginRight: "10px" }}>✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>
        {`
          @media (max-width: 768px) {
            #services {
              padding: 70px 20px;
            }

            #services h2 {
              font-size: 26px !important;
            }

            #services img:nth-child(2) {
              display: none;
            }
          }
        `}
      </style>
    </section>
  );
}
