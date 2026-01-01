export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        background: "#ffffff",
        borderBottom: "1px solid #eee",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 20px", // 👈 small height
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: "700",
            letterSpacing: "1px",
            color: "#7a4a1d",
            fontFamily: "Georgia, serif",
          }}
        >
          LATA TRAVELS
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
              gap: 10px;
            }

            .nav-menu {
              gap: 16px;
              flex-wrap: wrap;
              justify-content: center;
            }

            header a {
              font-size: 13px !important;
            }
          }
        `}
      </style>
    </header>
  );
}
