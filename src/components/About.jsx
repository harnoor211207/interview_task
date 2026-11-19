function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* Section Header Tag */}
        <div className="section-badge-wrapper">
          <div className="tag-pill tag-community">
            <span>// ABOUT CHAPTER</span>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="section-heading">
          ENGINEERING IDEAS INTO <span className="highlight-blue">REALITY</span>.
        </h2>

        {/* Editable placeholder text */}
        <div className="about-content-grid">
          <div className="about-text-column">
            <p className="about-paragraph primary-paragraph">
              The <strong>IE(I) CSE Student Chapter</strong> is a collaborative, student-driven technical collective dedicated to exploring the frontier of computer science, modern software engineering, and digital craft.
            </p>
            <p className="about-paragraph secondary-paragraph">
              We empower students to transcend traditional classroom theory. Through hands-on hackathons, technical workshops, collaborative coding sessions, and peer-led study cohorts, our members turn curiosities into scalable projects.
            </p>

            <div className="about-quick-stats">
              <div className="stat-pill">
                <span className="stat-value">500+</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat-pill">
                <span className="stat-value">20+</span>
                <span className="stat-label">Workshops &amp; Jams</span>
              </div>
              <div className="stat-pill">
                <span className="stat-value">100%</span>
                <span className="stat-label">Student-Governed</span>
              </div>
            </div>
          </div>

          {/* Visual Cards / Supporting Pillars */}
          <div className="about-cards-column">
            <div className="about-card">
              <div className="about-card-header">
                <span className="about-card-badge">// 01 &bull; INNOVATE</span>
                <span className="about-card-icon">&lt;/&gt;</span>
              </div>
              <h3 className="about-card-title">Tinker &amp; Build</h3>
              <p className="about-card-text">
                Gain hands-on experience building web apps, intelligent systems, and creative tools with peer feedback.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-header">
                <span className="about-card-badge">// 02 &bull; CONNECT</span>
                <span className="about-card-icon">&#9733;</span>
              </div>
              <h3 className="about-card-title">Inclusive Culture</h3>
              <p className="about-card-text">
                Whether you just wrote your first line of code or build complex distributed apps, you have a home here.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-header">
                <span className="about-card-badge">// 03 &bull; EXCEL</span>
                <span className="about-card-icon">&#8599;</span>
              </div>
              <h3 className="about-card-title">Leadership &amp; Growth</h3>
              <p className="about-card-text">
                Lead community initiatives, organize flagships, and build a standout portfolio for your tech career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
