function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-container">
        {/* Top Footer Section */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-column">
            <div className="navbar-brand footer-brand">
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
            </div>
            <p className="footer-brand-desc">
              A space for curious minds, creative thinkers and future technologists to connect, explore and build something meaningful.
            </p>
            <div className="footer-pill-tag">
              <span>// ACTIVE UNIVERSITY CHAPTER</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-column">
            <h4 className="footer-column-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Chapter</a></li>
              <li><a href="#events">Flagship Events</a></li>
              <li><a href="#contact">Contact &amp; Join</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-column">
            <h4 className="footer-column-heading">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-label">Location:</span>
                <span className="contact-value">Dept. of Computer Science &amp; Engineering</span>
              </li>
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:contact@iei-cse.org" className="contact-link">
                  contact@iei-cse.org
                </a>
              </li>
              <li>
                <span className="contact-label">Cohort:</span>
                <span className="contact-value">Fall &amp; Spring Admissions</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social-column">
            <h4 className="footer-column-heading">Community</h4>
            <div className="social-links-grid">
              <a href="#home" className="social-pill" aria-label="GitHub">
                GitHub
              </a>
              <a href="#home" className="social-pill" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#home" className="social-pill" aria-label="X / Twitter">
                X (Twitter)
              </a>
              <a href="#home" className="social-pill" aria-label="Instagram">
                Instagram
              </a>
              <a href="#home" className="social-pill" aria-label="Discord">
                Discord
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} IE(I) CSE Student Chapter. All rights reserved.
          </p>
          <div className="footer-motto">
            <span>THINK. CREATE. CONNECT.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
