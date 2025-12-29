import "./Services.css";

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

    /* 🔽 MORE SERVICES (SECOND ROW) */
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
    <section id="services" className="services">
      <h2>SERVICES</h2>
      <div className="services-line"></div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
