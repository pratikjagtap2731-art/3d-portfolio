import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm an engineer who couldn't stop asking "why," which pulled me
          beyond the code. Today, I operate as a{" "}
          <span className="glare-text">Product generalist</span> with strong
          business judgement — moving from whiteboarding ideas to shipping
          full-stack products. I'm drawn to building in 0 → 1 or scaling
          from 1 → 100 environments, creating things that actually move the
          needle.
        </p>
      </div>
    </div>
  );
};

export default About;
