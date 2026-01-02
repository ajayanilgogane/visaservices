export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        background: "#fffbfbff",
        borderBottom: "1px solid #eee",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* LOGO (IMAGE + TEXT) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "20px",
            fontWeight: "700",
            letterSpacing: "1px",
            color: "#cb6302e9",
            fontFamily: "Georgia, serif",
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/logos.avif"
            alt="Lata Travels Logo"
            style={{
              width: "38px",
              height: "38px",
              objectFit: "contain",
            }}
          />
          <span>LATA TRAVELS</span>
        </div>

        {/* MENU */}
        <nav
          className="nav-menu"
          style={{
            display: "flex",
            gap: "22px",
          }}
        >
          {["HOME", "ABOUT", "SERVICES", "TESTIMONIALS", "CONTACT"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "#7a4a1d",
                  fontSize: "14px",
                  fontWeight: "600",
                  position: "relative",
                  padding: "4px 0",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.borderBottom =
                    "2px solid #7a4a1d")
                }
                onMouseLeave={(e) =>
                  (e.target.style.borderBottom = "none")
                }
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>

      {/* MOBILE RESPONSIVE */}
      <style>
        {`
          @media (max-width: 768px) {
            header > div {
              flex-direction: column;
              gap: 12px;
            }

            .nav-menu {
              gap: 16px;
              flex-wrap: wrap;
              justify-content: center;
            }

            header a {
              font-size: 13px !important;
            }

            header img {
              width: 34px !important;
              height: 34px !important;
            }
          }
        `}
      </style>
    </header>
  );
}
