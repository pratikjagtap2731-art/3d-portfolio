import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Product Manager</h4>
                <h5>3rd Rock Essentials <span style={{opacity: 0.5, fontSize: "0.85em"}}>· startup</span> · San Francisco, CA</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Owned end-to-end Agile delivery shipping features and deployed
              AI-powered automations across e-commerce, warehouse operations,
              and sales support driving 14% MRR growth. Improved customer
              onboarding and retention by 27%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager Intern</h4>
                <h5>Walmart · Bentonville, AR</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led full product lifecycle for an outbound picking tool across
              Walmart's fulfillment centers, improving throughput 42%, reducing
              travel time 27%, and delivering $1.8M cost savings in 10 weeks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Marketing Consultant</h4>
                <h5>SKLLD <span style={{opacity: 0.5, fontSize: "0.85em"}}>· startup</span> · Durham, NC</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built go-to-market strategy for a job training platform,
              championing the Voice of Customer (VoC) and designed Figma
              prototypes achieving 65% positive beta feedback.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Programmer Analyst</h4>
                <h5>Cognizant · Pune, India</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Facilitated ML platform development with Python pipelines, built
              SQL/Tableau dashboards influencing leadership decisions, and
              automated ETL workflows improving processing speed by 45%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
