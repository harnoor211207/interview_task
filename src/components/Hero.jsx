function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Top Badges / Taglines */}
        <div className="hero-tags">
          <div className="tag-pill tag-yellow">
            <span>THINK. CREATE. CONNECT.</span>
          </div>
          <div className="tag-pill tag-community">
            <span>// IE(I) CSE COMMUNITY</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="hero-heading-wrapper">
          <h1 className="hero-title">
            <span className="hero-title-line title-dark">BIG IDEAS.</span>
            <span className="hero-title-line title-blue">BOLD PEOPLE.</span>
            <div className="squiggle-container" aria-hidden="true">
              <svg
                className="orange-squiggle-svg"
                viewBox="0 0 440 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M 4 11 Q 16 3, 28 11 T 52 11 T 76 11 T 100 11 T 124 11 T 148 11 T 172 11 T 196 11 T 220 11 T 244 11 T 268 11 T 292 11 T 316 11 T 340 11 T 364 11 T 388 11 T 412 11 T 436 11"
                  stroke="#f0683a"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="hero-title-line title-dark">BETTER EXPERIENCES.</span>
          </h1>
        </div>

        {/* Supporting description */}
        <p className="hero-description">
          A space for curious minds, creative thinkers and future technologists to connect, explore and build something meaningful.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#events" className="btn-hero-primary">
            <span>DISCOVER OUR EVENTS</span>
            <svg
              className="btn-arrow-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <a href="#about" className="btn-hero-secondary">
            <span>LEARN MORE</span>
          </a>
        </div>

        {/* Bottom Status / Meta Information Ticker */}
        <div className="hero-status-strip">
          <div className="status-item">
            <span className="status-dot-orange" aria-hidden="true">&#9679;</span>
            <span className="status-text">Active University Chapter</span>
          </div>
          <div className="status-item">
            <span className="status-separator" aria-hidden="true">&bull;</span>
            <span className="status-text">Fall &amp; Spring Cohorts</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
