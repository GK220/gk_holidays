
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-black text-white p-4 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <img src="/logo.png" alt="GK Holidays Logo" className="h-10 w-auto" />
      <h1 className="text-xl font-bold">GK HOLIDAYS</h1>
    </div>
    <div className="space-x-4">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/about" className="hover:text-gray-300">About Us</Link>
      <Link to="/services" className="hover:text-gray-300">Services</Link>
      <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
      <Link to="/contact" className="hover:text-gray-300">Contact</Link>
    </div>
  </nav>
);

const Home = () => (
  <section className="text-white p-10 bg-gradient-to-b from-black to-gray-900 min-h-screen">
    <h2 className="text-4xl font-bold mb-4">Escape the ordinary, Embrace the Adventure.</h2>
    <p className="text-lg">Welcome to GK HOLIDAYS – your trusted travel agency for unforgettable college trips, corporate outings, and adventurous getaways.</p>
  </section>
);

const About = () => (
  <section className="text-white p-10 bg-gray-900 min-h-screen">
    <h2 className="text-3xl font-semibold mb-4">About Us</h2>
    <p>GK HOLIDAYS is a dynamic travel agency based in Chennimalai, Erode, specializing in tailor-made trips for college students and corporate groups. We believe travel should be fun, safe, and memorable.</p>
  </section>
);

const Services = () => (
  <section className="text-white p-10 bg-gray-800 min-h-screen">
    <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
    <ul className="list-disc ml-6">
      <li>College Tour Planning</li>
      <li>Corporate Travel Packages</li>
      <li>Custom Itineraries</li>
      <li>Transportation & Accommodation</li>
      <li>On-Trip Support</li>
    </ul>
  </section>
);

const Gallery = () => (
  <section className="text-white p-10 bg-gray-900 min-h-screen">
    <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
    <p>Photo gallery coming soon...</p>
  </section>
);

const Contact = () => (
  <section className="text-white p-10 bg-black min-h-screen">
    <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
    <ul className="text-lg">
      <li><strong>Email:</strong> official.gkholidays@gmail.com</li>
      <li><strong>Phone:</strong> 9047231859, 9361538027</li>
      <li><strong>Location:</strong> Chennimalai, Erode</li>
      <li><strong>Instagram:</strong> <a href="https://www.instagram.com/gk_holidays_0fficial/profilecard/?igsh=MXJoaGF3cTRkenN6Zw==" className="text-blue-400 underline">@gk_holidays_0fficial</a></li>
    </ul>
  </section>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
