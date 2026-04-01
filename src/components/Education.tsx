import { useState } from "react";
import "./styles/Education.css";
import { MdExpandMore } from "react-icons/md";

const Education = () => {
  const [expandedDuke, setExpandedDuke] = useState(false);
  const [expandedViit, setExpandedViit] = useState(false);

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
          <button 
            className="edu-expand-btn" 
            onClick={() => setExpandedDuke(!expandedDuke)}
            aria-label={expandedDuke ? "Hide courses" : "Show courses"}
            data-cursor="disable"
          >
            <span>{expandedDuke ? "Hide Courses" : "Show Courses"}</span>
            <MdExpandMore className={`edu-expand-icon ${expandedDuke ? "expanded" : ""}`} />
          </button>
          
          <div className={`edu-expanded-content ${expandedDuke ? "show" : ""}`}>
            <div className="edu-highlights">
              <span className="edu-tag">Product Management</span>
              <span className="edu-tag">Design Customer Experiences</span>
              <span className="edu-tag">Marketing</span>
              <span className="edu-tag">Competitive Strategy</span>
              <span className="edu-tag">IP, Business Law & Entrepreneurship</span>
            </div>
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
          <button 
            className="edu-expand-btn" 
            onClick={() => setExpandedViit(!expandedViit)}
            aria-label={expandedViit ? "Hide courses" : "Show courses"}
            data-cursor="disable"
          >
            <span>{expandedViit ? "Hide Courses" : "Show Courses"}</span>
            <MdExpandMore className={`edu-expand-icon ${expandedViit ? "expanded" : ""}`} />
          </button>

          <div className={`edu-expanded-content ${expandedViit ? "show" : ""}`}>
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
    </div>
  );
};

export default Education;
