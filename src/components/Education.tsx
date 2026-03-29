import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h3>Education</h3>

        {/* ── Duke ── */}
        <div className="edu-card edu-duke">
          <div className="edu-accent-bar" />
          <img
            src="/images/download.jpg"
            alt="Duke University"
            className="edu-logo"
          />
          <div className="edu-top">
            <div className="edu-school">
              <span className="edu-name">Duke University</span>
              <span className="edu-location">Durham, NC</span>
            </div>
          </div>
          <h4 className="edu-degree">
            Master of Engineering Management
          </h4>
          <div className="edu-highlights">
            <span className="edu-tag">Product Management</span>
            <span className="edu-tag">Design Customer Experiences</span>
            <span className="edu-tag">Marketing</span>
            <span className="edu-tag">Competitive Strategy</span>
            <span className="edu-tag">IP, Business Law & Entrepreneurship</span>
          </div>
          <p className="edu-note">
            Fuqua School of Business & Pratt School of Engineering
          </p>
        </div>

        {/* ── VIIT ── */}
        <div className="edu-card edu-viit">
          <div className="edu-accent-bar" />
          <img
            src="/images/Vishwakarma_Institute_of_Technology.png"
            alt="VIIT"
            className="edu-logo"
          />
          <div className="edu-top">
            <div className="edu-school">
              <span className="edu-name">VIIT</span>
              <span className="edu-location">Pune, India</span>
            </div>
          </div>
          <h4 className="edu-degree">
            Bachelor of Information Technology
          </h4>
          <div className="edu-highlights">
            <span className="edu-tag">Software Development</span>
            <span className="edu-tag">Artificial Intelligence</span>
            <span className="edu-tag">Business Intelligence</span>
            <span className="edu-tag">Data Science</span>
            <span className="edu-tag">Human Computer Interaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
