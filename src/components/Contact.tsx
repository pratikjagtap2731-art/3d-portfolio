import { MdCopyright } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <p className="contact-tagline">
          Let's build something worth shipping.
        </p>

        {/* ── Main CTA row ── */}
        <div className="contact-cta-row">
          <a
            href="mailto:pratikjagtap2731@gmail.com"
            className="contact-cta-link"
            data-cursor="disable"
          >
            pratikjagtap2731@gmail.com <FiArrowUpRight />
          </a>
          <a
            href="tel:+19196382746"
            className="contact-cta-link"
            data-cursor="disable"
          >
            +1 (919) 638-2746 <FiArrowUpRight />
          </a>
        </div>

        {/* ── Why me ── */}
        <div className="contact-why">
          <span className="contact-why-label">Why work with me</span>
          <div className="contact-why-items">
            <div className="contact-why-item">
              <span className="why-num">01</span>
              <p>Engineer-turned-PM who speaks both languages fluently</p>
            </div>
            <div className="contact-why-item">
              <span className="why-num">02</span>
              <p>0 → 1 builder with startup & enterprise experience</p>
            </div>
            <div className="contact-why-item">
              <span className="why-num">03</span>
              <p>AI-native — I ship with LLMs, not just about them</p>
            </div>
          </div>
        </div>

        {/* ── Actions ── */}
        <div className="contact-actions-row">
          <a
            href="https://calendly.com/pratikjagtap2731/30min"
            target="_blank"
            rel="noreferrer"
            className="contact-btn filled"
            data-cursor="disable"
          >
            Schedule a Call
          </a>
          <a
            href="/Resume_Pratik.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-btn outline"
            data-cursor="disable"
          >
            Download Resume
          </a>
        </div>

        {/* ── Elsewhere ── */}
        <div className="contact-elsewhere">
          <span className="contact-elsewhere-label">Elsewhere</span>
          {/* Desktop: text links */}
          <div className="contact-links contact-links-desktop">
            <a
              href="https://www.linkedin.com/in/pj00/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              LinkedIn <FiArrowUpRight />
            </a>
            <a
              href="https://github.com/pratikjagtap2731-art"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              GitHub <FiArrowUpRight />
            </a>
            <a
              href="https://www.instagram.com/_pratikkk_27/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              Instagram <FiArrowUpRight />
            </a>
          </div>
          {/* Mobile: icon logos */}
          <div className="contact-links contact-links-mobile">
            <a
              href="https://www.linkedin.com/in/pj00/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="social-icon-btn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/pratikjagtap2731-art"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="social-icon-btn"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/_pratikkk_27/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="social-icon-btn"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* ── Photo + Footer ── */}
        <div className="contact-photo-section">
          <div className="contact-photo">
            <img src="/images/pratik-final-img.jpeg" alt="Pratik Jagtap" />
          </div>
          <div className="contact-footer">
            <span>
              Designed & Developed by <em>Pratik Jagtap</em>
            </span>
            <span className="contact-copy">
              <MdCopyright /> 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
