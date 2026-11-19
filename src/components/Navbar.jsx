import { useState } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand / Logo matching the Stitch design */}
        <a href="#home" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="brand-logo-badge" aria-label="IE(I) Logo">
            <svg
              className="brand-logo-svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="12" fill="#2253f5" />
              {/* Stylized IE(I) text emblem */}
              <text
                x="50%"
                y="54%"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#ffffff"
                fontFamily="'Space Grotesk', -apple-system, sans-serif"
                fontWeight="900"
                fontSize="14.5"
                letterSpacing="-0.6px"
              >
                IE(I)
              </text>
            </svg>
          </div>
          <div className="brand-text-block">
            <span className="brand-title">IE(I) CSE</span>
            <span className="brand-subtitle">STUDENT CHAPTER</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="navbar-actions">
          <a href="#contact" className="btn-become-member">
            Become a Member
          </a>
        </div>

        {/* Mobile Hamburger Button matching Stitch */}
        <button
          type="button"
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <nav className="mobile-nav-links">
            <a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>
              Home
            </a>
            <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
              About
            </a>
            <a href="#events" className="mobile-nav-link" onClick={closeMobileMenu}>
              Events
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
              Contact
            </a>
            <div className="mobile-nav-action">
              <a
                href="#contact"
                className="btn-become-member mobile-cta"
                onClick={closeMobileMenu}
              >
                Become a Member
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
