import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_d40zw8k",       // ✅ your service ID
        "template_ug29ptf",      // ✅ your template ID
        formRef.current,
        "HjT_rKDyZUz81Z6Fn"      // ✅ your public key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message");
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="contact">
      <h2>CONTACT</h2>
      <div className="contact-line"></div>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <p><strong>Mumbai, Maharashtra, India</strong></p>
          <p>📞 +91-919082405292 – <span>LATA VISA SERVIVES</span></p>
          <p>✉️ Latatravels6@gmail.com</p>
          <p>🕒 Mon–Fri : 08:00–19:00</p>
        </div>

        {/* RIGHT FORM */}
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <div className="form-row">
            <input
              type="text"
              name="name"          // 🔴 must match template
              placeholder="Name"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
            />
          </div>

          <input
            type="email"
            name="email"          // 🔴 must match template
            placeholder="Email address"
            required
          />

          <textarea
            name="message"        // 🔴 must match template
            placeholder="Message"
            required
          ></textarea>

          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "CONTACT US"}
          </button>
        </form>
      </div>
    </section>
  );
}
