export default function Services() {
  const services = [
    {
      title: "Study Visa Support",
      img: "/services1.jpeg",
      desc:
        "Students aiming to study internationally can rely on us for clear and supportive assistance in obtaining their study visas.",
    },
    {
      title: "Business Visa Processing",
      img: "/services2.webp",
      desc:
        "For business professionals, we ensure all requirements are met for a successful application, allowing focus on corporate goals.",
    },
    {
      title: "Tourist Visa Assistance",
      img: "/services4.jpg",
      desc:
        "We help travelers obtain tourist visas quickly and efficiently, providing guidance through each step of the process.",
    },
    {
      title: "Family Visa Services",
      img: "/services5.webp",
      desc:
        "We assist families in reuniting by handling family visa documentation and applications smoothly.",
    },
    {
      title: "Work Visa Guidance",
      img: "/servicesw.webp",
      desc:
        "Our experts guide professionals through work visa requirements to ensure a hassle-free approval process.",
    },
    {
      title: "Visa Documentation Support",
      img: "/servcies6.jpg",
      desc:
        "We carefully verify and prepare all required documents to avoid delays or rejections.",
    },
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
           color: "#333",
        }}
      >
        SERVICES
      </h2>

      <div
        style={{
          width: "60px",
          height: "3px",
          background: "#c97a2b",
          margin: "14px auto 50px",
        }}
      />

      {/* SERVICES GRID */}
      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* RESPONSIVE CSS */}
      <style>
        {`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 60px 40px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .service-card {
            max-width: 320px;
            margin: auto;
          }

          .service-card img {
            width: 160px;
            height: 160px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 20px;
          }

          .service-card h3 {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 10px;
             color: #333;
          }

          .service-card p {
            font-size: 14px;
            color: #444;
            line-height: 1.6;
          }

          /* TABLET */
          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          /* MOBILE */
          @media (max-width: 600px) {
            .services-grid {
              grid-template-columns: 1fr;
            }

            .service-card img {
              width: 130px;
              height: 130px;
            }

            #services h2 {
              font-size: 24px;
            }
          }
        `}
      </style>
    </section>
  );
}
