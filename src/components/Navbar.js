import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import './Navbar.css'; // Assuming you have a Navbar.css file for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src="https://i.ibb.co/kQcz9SN/Untitled-design-62.png" alt="0"></img></div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
        {['About us', 'Portfolio', 'Services', 'Brands', 'Contact Us'].map((item, index) => (
          <Link key={index} to={item.replace(/\s+/g, '').toLowerCase()} spy={true} smooth={true} offset={-70} duration={500} className={item === 'Contact Us' ? 'contact-us' : ''}>
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
