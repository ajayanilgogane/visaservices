export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/new.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          padding: "0 20px",
          color: "#fff",
        }}
      >
        {/* TOP SMALL TEXT */}
        <p
          style={{
            fontSize: "20px",
            letterSpacing: "1px",
            marginBottom: "14px",
          }}
        >
          Welcome to{" "}
          <span
            style={{
              color: "#ff0000",
              fontWeight: "700",
            }}
          >
            LATA TRAVELS
          </span>
        </p>

        {/* MAIN HEADING */}
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "800",
            lineHeight: "1.2",
            marginBottom: "18px",
          }}
        >
          From Visa to Adventure, <br />
          Your All-in-One Travel Solution
        </h1>

        {/* SUB TEXT */}
        <p
          style={{
            fontSize: "18px",
            opacity: 0.9,
            marginBottom: "16px",
          }}
        >
          Let’s Make it Happen
        </p>

        {/* ⭐ EMOTIONAL LINE */}
        <p
          style={{
            fontSize: "17px",
            fontWeight: "500",
            marginBottom: "28px",
            opacity: 0.95,
          }}
        >
          😊 When visas get approved, people smile — that happiness and joy is what drives <strong>Lata Travels.</strong>
        </p>

        {/* CTA BUTTON */}
        <a
          href="#contact"
          style={{
            display: "inline-block",
            background: "#ff0000",
            color: "#fff",
            textDecoration: "none",
            padding: "14px 28px",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          📞 Book Appointment
        </a>
      </div>

      {/* MOBILE RESPONSIVE */}
      <style>
        {`
          @media (max-width: 768px) {
            #hero h1 {
              font-size: 32px !important;
            }

            #hero p {
              font-size: 15px !important;
            }

            #hero a {
              padding: 12px 22px;
              font-size: 15px;
            }
          }
        `}
      </style>
    </section>
  );
}
