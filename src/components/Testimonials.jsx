import { useState } from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const reviews = [
    {
      text: "Thanks to VISA Services, I quickly secured my study visa without any complications.",
      name: "John Stevens",
      role: "Student"
    },
    {
      text: "Their thorough approach made my business visa application effortless and stress-free.",
      name: "Amit Sharma",
      role: "Business Professional"
    },
    {
      text: "VISA Services made my family’s tourist visa process smooth and well guided.",
      name: "Priya Mehta",
      role: "Traveler"
    }
  ];

  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>TESTIMONIALS</h2>
      <div className="testimonials-line"></div>

      <div className="testimonial-wrapper">
        {/* LEFT ARROW */}
        <button className="arrow left-arrow" onClick={prevTestimonial}>
          ❮
        </button>

        {/* CONTENT */}
        <div className="testimonial-box">
          <div className="stars">★★★★★</div>

          <p className="testimonial-text">
            “{reviews[index].text}”
          </p>

          <div className="testimonial-divider"></div>

          <p className="testimonial-name">
            {reviews[index].name}: <span>{reviews[index].role}</span>
          </p>
        </div>

        {/* RIGHT ARROW */}
        <button className="arrow right-arrow" onClick={nextTestimonial}>
          ❯
        </button>
      </div>

      {/* DOTS */}
      <div className="testimonial-dots">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </section>
  );
}
