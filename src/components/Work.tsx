import { useState, useCallback, useEffect, useRef } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdExpandMore } from "react-icons/md";

interface Project {
  title: string;
  category: string;
  description: string;
  kpis: string[];
  image?: string;
  mobileImage?: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    title: "Outbound Picking Tool",
    category: "Walmart Global Tech",
    description:
      "Improved how warehouse associates move inside fulfillment centers while collecting products for shipment. Earlier, associates followed longer routes and spent extra time moving back and forth between aisles. Redesigned the picking workflow so movement became shorter and more efficient. Collaborated with operations and engineering teams to implement improvements in the internal picking system.",
    kpis: [
      "27% reduction in associate travel time",
      "42% increase in picking throughput",
      "72% increase in Units per hour (UPH)",
    ],
    image: "/images/walmart crop.png",
    mobileImage: "/images/walmart product.png",
  },
  {
    title: "Visitor & Workflow Management Platform",
    category: "Atlas Copco",
    description:
      "Led development of an internal workflow platform to digitize visitor access and employee movement approvals across the plant. Designed user journeys for employees, security staff, admins, and department heads to simplify access requests and approvals. Delivered a scalable system that replaced manual approvals and improved process reliability.",
    kpis: [
      "48% faster workflow processing",
      "60% increase in daily system adoption",
      "96% approval accuracy across plant operations",
    ],
    image: "/images/atlas copco cropped.png",
    mobileImage: "/images/atlas copco product.png",
  },
  {
    title: "Coming Soon",
    category: "More exciting work ahead",
    description:
      "Another project is on the way. Check back soon to see what's next.",
    kpis: [],
    comingSoon: true,
  },
];

const AUTO_SLIDE_INTERVAL = 3800;

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  // Intersection Observer
  const workSectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = workSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 40;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();
  };

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  // Auto-slide
  useEffect(() => {
    if (isPaused || !isVisible || expandedSlide !== null) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, AUTO_SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isVisible, currentIndex, expandedSlide]);

  // Progress bar width
  const progressPercent = ((currentIndex + 1) / projects.length) * 100;

  return (
    <div
      className="work-section"
      id="work"
      ref={workSectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            0 → 1 <span>Products</span> I Have Shipped
          </h2>
        </div>

        {/* Progress bar */}
        <div className="work-progress-track">
          <div
            className="work-progress-bar"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => {
                const isExpanded = expandedSlide === index;
                return (
                  <div
                    className={`carousel-slide ${project.comingSoon ? "carousel-slide-soon" : ""}`}
                    key={index}
                  >
                    <div className="carousel-content">
                      <div className="carousel-info">
                        <div className="carousel-details">
                          <div className="carousel-header-wrapper">
                            <div className="carousel-title-group">
                              <h4>
                                {project.title}
                                {project.comingSoon && (
                                  <span className="soon-badge">Soon</span>
                                )}
                              </h4>
                              {project.category && (
                                <p className="carousel-category">
                                  {project.category}
                                </p>
                              )}
                            </div>
                            {project.mobileImage && (
                              <img className="mobile-project-logo" src={project.mobileImage} alt="logo" />
                            )}
                          </div>
                          <p className="carousel-description">
                            {project.description}
                          </p>
                          {project.kpis.length > 0 && (
                            <div className="carousel-tools">
                              <span className="tools-label">Impact</span>
                              <div className="carousel-tool-tags">
                                {project.kpis.map((kpi: string, i: number) => (
                                  <span className="tool-tag" key={i}>
                                    {kpi}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        {/* Mobile expand toggle */}
                        {!project.comingSoon && (
                          <button
                            className="mobile-expand-btn"
                            onClick={() =>
                              setExpandedSlide(isExpanded ? null : index)
                            }
                            aria-label={isExpanded ? "Show less" : "Show more"}
                            data-cursor="disable"
                          >
                            <span>{isExpanded ? "Show Less" : "Show More"}</span>
                            <MdExpandMore
                              className={`expand-icon ${isExpanded ? "expanded" : ""}`}
                            />
                          </button>
                        )}
                        {/* Mobile expanded content */}
                        <div
                          className={`mobile-expanded-content ${isExpanded ? "show" : ""}`}
                        >
                          <p className="carousel-description">
                            {project.description}
                          </p>
                          {project.kpis.length > 0 && (
                            <div className="carousel-tools">
                              <span className="tools-label">Impact</span>
                              <div className="carousel-tool-tags">
                                {project.kpis.map((kpi: string, i: number) => (
                                  <span className="tool-tag" key={i}>
                                    {kpi}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      {project.image && !project.comingSoon && (
                        <div className="carousel-image-wrapper">
                          <div className="work-image">
                            <img src={project.image} alt={project.title} />
                          </div>
                        </div>
                      )}
                      {project.comingSoon && (
                        <div className="carousel-image-wrapper">
                          <div className="coming-soon-visual">
                            <div className="soon-icon">?</div>
                            <p>Project in progress</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
