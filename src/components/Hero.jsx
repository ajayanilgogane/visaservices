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
        {/* TOP TEXT */}
        <p
          style={{
            fontSize: "20px",
            letterSpacing: "1px",
            marginBottom: "16px",
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
            marginBottom: "22px",
          }}
        >
          Let’s Make It Happen
        </p>

        {/* ⭐ MOTIVATIONAL MESSAGE (NEW) */}
        <div
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            marginBottom: "30px",
            opacity: 0.95,
          }}
        >
          <p>😊 Speak your truth, believe in it, and watch embassy doors swing open.</p>
          <p>Ready to turn your dreams into reality?</p>
          <p>
            Your visa approval is just a positive thought away — let’s make the
            process as breezy as a walk in the park.
          </p>
        </div>

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
          }}
        >
          📞 Book Appointment
        </a>
      </div>

      {/* RESPONSIVE */}
      <style>
        {`
          @media (max-width: 768px) {
            #hero h1 {
              font-size: 32px !important;
            }

            #hero p {
              font-size: 15px !important;
            }

            #hero div {
              font-size: 14px !important;
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
