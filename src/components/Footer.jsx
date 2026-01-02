export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "70px 20px 20px",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          paddingBottom: "20px",
        }}
      >
        <p style={{ fontSize: "14px", opacity: 0.9 }}>
          Approved Traveler Visa Applications.{" "}
          <strong style={{ textDecoration: "underline" }}>
            Get Your Visa
          </strong>
        </p>
      </div>

      {/* MAIN GRID */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "40px",
        }}
      >
        {/* ABOUT + LEGAL */}
        <div>
          <h4 style={heading}>About Company</h4>

          <p style={text}>
            Welcome to <strong>Lata Travels</strong>, your trusted partner in
            travel and visa services. We are committed to excellence and
            customer satisfaction.
          </p>

          {/* LEGAL INFO BOX */}
          <div
            style={{
              marginTop: "16px",
              padding: "14px 16px",
              background: "rgba(255,255,255,0.08)",
              borderLeft: "4px solid #ff0000",
              borderRadius: "6px",
            }}
          >
            <p style={legalText}>
              <strong>GSTIN:</strong> 27AHGPJ2858N1ZT
            </p>
            <p style={legalText}>
              <strong>Legal Name:</strong> Hemlatta Kirit Joshi
            </p>
            <p style={legalText}>
              <strong>Trade Name:</strong> Lata Travels
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 style={heading}>Quick Links</h4>
          <a href="#hero" style={link}>Home</a>
          <a href="#about" style={link}>Company</a>
          <a href="#services" style={link}>Our Services</a>
          <a href="#testimonials" style={link}>Testimonials</a>
          <a href="#contact" style={link}>Contact Us</a>
        </div>

        {/* SERVICES */}
        <div>
          <h4 style={heading}>Services</h4>
          <a href="#services" style={link}>Visa Services</a>
          <a href="#services" style={link}>Holiday Packages</a>
          <a href="#services" style={link}>Flight Ticket</a>
          <a href="#services" style={link}>Hotel Booking</a>
          <a href="#services" style={link}>Travel Insurance</a>
          <a href="#services" style={link}>Visa Extension</a>
        </div>

        {/* CONTACT */}
        <div>
          <h4 style={heading}>Get In Touch</h4>
          <p style={contact}>📧 Latatravels6@gmail.com</p>
          <p style={contact}>📞 +91 91908 24052</p>
          <p style={contact}>
            📍 Vasai, Mumbai, Maharashtra, India
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          marginTop: "40px",
          paddingTop: "15px",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          textAlign: "center",
          fontSize: "13px",
          opacity: 0.85,
        }}
      >
        © {new Date().getFullYear()} Lata Travels | All Rights Reserved
      </div>

      {/* RESPONSIVE */}
      <style>
        {`
          @media (max-width: 900px) {
            footer div[style*="grid-template-columns"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 600px) {
            footer div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
          }
        `}
      </style>
    </footer>
  );
}

/* ===== STYLES ===== */
const heading = {
  fontSize: "18px",
  fontWeight: "700",
  marginBottom: "16px",
};

const text = {
  fontSize: "14px",
  lineHeight: "1.7",
  opacity: 0.9,
};

const legalText = {
  fontSize: "13.5px",
  lineHeight: "1.6",
  marginBottom: "6px",
  opacity: 0.95,
};

const link = {
  display: "block",
  fontSize: "14px",
  marginBottom: "10px",
  color: "#fff",
  textDecoration: "none",
  opacity: 0.9,
};

const contact = {
  fontSize: "14px",
  lineHeight: "1.6",
  marginBottom: "12px",
};
