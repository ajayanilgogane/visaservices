export default function Testimonials() {
  const reviews = [
    {
      name: "John Stevens",
      text: "Thanks to VISA Services, I quickly secured my study visa without any complications."
    },
    {
      name: "Amit Sharma",
      text: "Their thorough approach made my business visa application effortless and stress-free."
    },
    {
      name: "Priya Mehta",
      text: "VISA Services made my family’s tourist visa process smooth and well guided."
    },
    {
      name: "Rahul Verma",
      text: "Professional, transparent, and very responsive throughout the process."
    },
    {
      name: "Sneha Kulkarni",
      text: "Highly recommend them for visa and documentation services."
    },
    {
      name: "Michael Brown",
      text: "The team guided me step by step and ensured timely approval."
    },
    {
      name: "Ankit Joshi",
      text: "Very professional service with clear guidance at every stage."
    },
    {
      name: "Neha Patel",
      text: "Smooth process and quick response. Highly satisfied!"
    }
  ];

  return (
    <section id="testimonials">
      {/* ===== HEADER ===== */}
      <div
        style={{
          height: "45vh",
          background:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/review.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "42px" }}>Customer Reviews</h1>
      </div>

      {/* ===== REVIEWS GRID ===== */}
      <div
        style={{
          backgroundImage: "url('/world-map.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "8px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              }}
            >
              {/* HEADER (NAME + GOOGLE) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <strong style={{ fontSize: "14px", color: "#000" }}>
                  {review.name}
                </strong>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    color: "#4285F4",
                    fontWeight: "600",
                  }}
                >
                  <img
                    src="/google.png"
                    alt="Google"
                    style={{ width: "16px", height: "16px" }}
                  />
                  Google
                </div>
              </div>

              {/* STARS */}
              <div style={{ color: "#f4b400", marginBottom: "10px" }}>
                ★★★★★
              </div>

              {/* TEXT */}
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#333",
                }}
              >
                “{review.text}”
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE FIX */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 30px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
