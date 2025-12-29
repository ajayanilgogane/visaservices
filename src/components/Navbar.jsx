import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">LATA TRAVELS</div>

        <nav className="menu">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#testimonials">TESTIMONIALS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}
