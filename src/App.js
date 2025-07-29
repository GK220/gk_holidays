import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <img src="/logo.png" alt="GK Holidays Logo" className="logo" />
      <h1 className="brand-title">HOLIDAYS</h1>
    </div>
    <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/services" className="nav-link">Services</Link>
      <Link to="/gallery" className="nav-link">Gallery</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </div>
  </nav>
);

const Home = () => (
  <section className="home-section">
    <h2 className="section-title">Escape the ordinary, Embrace the Adventure.</h2>
    <p className="section-desc">
      Welcome to GK HOLIDAYS – your trusted travel agency for unforgettable college trips, corporate outings, and adventurous getaways.
    </p>
  </section>
);

const About = () => (
  <section className="about-section">
    <h2 className="section-title">About Us</h2>
    <p>
      GK HOLIDAYS is a dynamic travel agency based in Chennimalai, Erode, specializing in tailor-made trips for college students and corporate groups. We believe travel should be fun, safe, and memorable.
    </p>
  </section>
);

const Services = () => (
  <section className="services-section">
    <h2 className="section-title">Our Services</h2>
    <ul className="services-list">
      <li>College Tour Planning</li>
      <li>Corporate Travel Packages</li>
      <li>Custom Itineraries</li>
      <li>Transportation & Accommodation</li>
      <li>On-Trip Support</li>
    </ul>
  </section>
);

const Gallery = () => (
  <section className="gallery-section">
    <h2 className="section-title">Gallery</h2>
    <p>Photo gallery coming soon...</p>
  </section>
);

const Contact = () => (
  <section className="contact-section">
    <h2 className="section-title">Contact Us</h2>
    <ul className="contact-list">
      <li><strong>Email:</strong> official.gkholidays@gmail.com</li>
      <li><strong>Phone:</strong> 9047231859, 9361538027</li>
      <li><strong>Location:</strong> Chennimalai, Erode</li>
      <li>
        <strong>Instagram:</strong>{" "}
        <a
          href="https://www.instagram.com/gk_holidays_0fficial/profilecard/?igsh=MXJoaGF3cTRkenN6Zw=="
          className="insta-link"
        >
          @gk_holidays_0fficial
        </a>
      </li>
    </ul>
  </section>
);

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}