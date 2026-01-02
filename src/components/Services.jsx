export default function Services() {
  const services = [
    {
      title: "Study Visa Support",
      img: "/services1.jpeg",
      desc:
        "Students aiming to study internationally can rely on us for clear and supportive assistance in obtaining their study visas."
    },
    {
      title: "Business Visa Processing",
      img: "/services2.webp",
      desc:
        "For business professionals, we ensure all requirements are met for a successful application, allowing focus on corporate goals."
    },
    {
      title: "Tourist Visa Assistance",
      img: "/services4.jpg",
      desc:
        "We help travelers obtain tourist visas quickly and efficiently, providing guidance through each step of the process."
    },
    {
      title: "Family Visa Services",
      img: "/services5.webp",
      desc:
        "We assist families in reuniting by handling family visa documentation and applications smoothly."
    },
    {
      title: "Work Visa Guidance",
      img: "/servicesw.webp",
      desc:
        "Our experts guide professionals through work visa requirements to ensure a hassle-free approval process."
    },
    {
      title: "Visa Documentation Support",
      img: "/servcies6.jpg",
      desc:
        "We carefully verify and prepare all required documents to avoid delays or rejections."
    }
  ];

  return (
    <section
      id="services"
      style={{
        padding: "80px 20px",
        background: "#fafafa",
        textAlign: "center",
      }}
    >
      {/* HEADER */}
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        SERVICES
      </h2>

      <div
        style={{
          width: "50px",
          height: "3px",
          background: "#c97a2b",
          margin: "14px auto 50px",
        }}
      />

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // ✅ FORCE 3 PER ROW
          gap: "60px 40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {services.map((item, index) => (
          <div
            key={index}
            style={{
              maxWidth: "320px",
              margin: "0 auto",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
            />

            <h3
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: "#444",
                lineHeight: "1.6",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* RESPONSIVE BREAKPOINTS */}
      <style>
        {`
          @media (max-width: 1024px) {
            #services > div:nth-of-type(3) {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 600px) {
            #services > div:nth-of-type(3) {
              grid-template-columns: 1fr !important;
            }

            #services img {
              width: 130px !important;
              height: 130px !important;
            }

            #services h2 {
              font-size: 24px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
