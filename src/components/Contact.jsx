import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_d40zw8k",
        "template_ug29ptf",
        formRef.current,
        "HjT_rKDyZUz81Z6Fn"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("❌ Failed to send message");
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact">
      {/* ===== HERO HEADER ===== */}
      <div
        style={{
          position: "relative",
          height: "60vh",
          backgroundImage: 'url("/meeting.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.32)",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "42px", marginBottom: "10px"}}>
            Contact Us
          </h1>
          <p
          style={{
            opacity: 0.9,
           
          }}
        >
          Feel free to get in touch with us
        </p>

        </div>
      </div>

      {/* ===== FORM SECTION ===== */}
      <div
        style={{
          padding: "70px 20px",
          background: "#fafafa",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "10px",  color: "#444",}}>
          Feel Free to Get in Touch with Us
        </h2>
        <p style={{ marginBottom: "40px" ,color: "#444", }}>
          Contact With Us
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          style={{
            maxWidth: "800px",
            margin: "auto",
            background: "#fff",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              style={inputStyle}
            />
            <select name="service" style={inputStyle}>
              <option>Select Services</option>
              <option>Visa</option>
              <option>Travel</option>
              <option>Documentation</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Message"
            required
            style={{
              ...inputStyle,
              marginTop: "20px",
              height: "120px",
            }}
          ></textarea>

          <button
            type="submit"
            disabled={sending}
            style={{
              marginTop: "25px",
              background: "#ff0000c6",
              color: "#fff",
              border: "none",
              padding: "12px 28px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {sending ? "Sending..." : "Send a Message"}
          </button>
        </form>
      </div>

      {/* ===== INFO CARDS ===== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          padding: "40px 20px",
          background: "#f3ece8",
          textAlign: "center",
        }}
      >
        <InfoCard title="Write to Us" text="Latatravels6@gmail.com" />
        <InfoCard title="Visit Us" text="Mumbai, Maharashtra, India" />
        <InfoCard title="Call Us" text="+91 9082405292, +91 9372305292" />
      </div>

      {/* ===== MAP ===== */}
      <iframe
        title="map"
        src="https://www.google.com/maps?q=Mumbai&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>

      {/* ===== MOBILE FIX ===== */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 { font-size: 30px !important; }
            form { padding: 25px !important; }
            form div { grid-template-columns: 1fr !important; }
          }
        `}
      </style>
    </section>
  );
}

/* ===== HELPERS ===== */
const inputStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  width: "100%",
};

function InfoCard({ title, text }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <h4 style={{ marginBottom: "10px", color: "#ff0000" }}>
        {title}
      </h4>

      <p
        style={{
          color: "#333", // visible in both dark & light mode
          opacity: 0.9,
        }}
      >
        {text}
      </p>
    </div>
  );
}

