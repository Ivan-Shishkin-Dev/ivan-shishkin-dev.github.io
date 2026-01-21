import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import Section from "../components/Section";
import ScrollFloat from "../components/ScrollFloat";
import Threads from "../components/Threads";

const EXPERIENCE_ITEMS = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Pacific Coast Industrial Installer",
    location: "Irvine, CA",
    period: "Oct. 2025 – Present",
    responsibilities: [
      "Architected and deployed a full-stack mobile compliance platform using React Native and PostgreSQL, enabling real-time verification of worker insurance and certifications for high-stakes construction sites.",
      "Engineered a secure authentication system with robust password validation and granular access control policies to protect sensitive contractor and worker data.",
      "Integrated third-party Clearinghouse APIs to perform automated insurance policy validation, reducing manual compliance overhead and ensuring site safety standards.",
      "Streamlined document management by designing a camera-based upload workflow that utilizes metadata extraction to automate certificate tracking and expiration alerts.",
      "Optimized media storage by implementing AWS S3 for reliable, scalable document hosting, ensuring high availability of compliance records for on-site audits.",
    ],
  },
  {
    id: 2,
    title: "Arroyo Vista Center Attendant",
    company: "University of California, Irvine",
    location: "Irvine, CA",
    period: "Aug. 2025 – Present",
    responsibilities: [
      "Manage facility operations across multiple public spaces including housing offices, mailrooms, fitness centers, and study areas, ensuring consistent service delivery for undergraduate residential community",
      "Administer digital housing management systems (OSCAR, Roompact) to process data entry, track operational records, and coordinate service requests across residential facilities",
      "Provide first-point-of-contact support for residents and visitors, addressing inquiries, troubleshooting facility issues, and maintaining welcoming environment aligned with inclusive housing standards",
      "Maintain operational compliance by organizing digital documentation, processing information requests, and ensuring accuracy of housing system data and facility records",
    ],
  },
];

function ExperienceItem({ item }) {
  return (
    <div
      style={{
        background: "#0a0a0a",
        padding: "2rem",
        borderRadius: "12px",
        border: "1px solid #fff",
        width: "100%",
        flexShrink: 0,
      }}
    >
      <h3
        className="experience-title"
        style={{
          color: "#fff",
          fontSize: "1.5rem",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
      >
        {item.title}
      </h3>
      <p
        className="experience-subtitle"
        style={{
          color: "#aaa",
          fontSize: "1rem",
          marginBottom: "1rem",
          fontStyle: "italic",
        }}
      >
        {item.company} • {item.location} • {item.period}
      </p>
      <ul
        className="experience-list"
        style={{
          color: "#ccc",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          paddingLeft: "1.25rem",
          listStylePosition: "outside",
          margin: 0,
        }}
      >
        {item.responsibilities.map((responsibility, index) => (
          <li
            key={index}
            style={{
              marginBottom:
                index === item.responsibilities.length - 1 ? 0 : "1.2rem",
              fontWeight: 500,
              paddingLeft: 0,
              textAlign: "left",
            }}
          >
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  const [position, setPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(800);
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const gap = 32;

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
      }
    };

    // Initial width calculation
    updateWidth();

    // Use ResizeObserver for more accurate tracking
    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    resizeObserver.observe(containerRef.current);

    // Fallback to window resize listener
    window.addEventListener("resize", updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    animate(x, -position * (containerWidth + gap), {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  }, [position, x, containerWidth]);

  const handlePrevious = () => {
    setPosition((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setPosition((prev) => Math.min(EXPERIENCE_ITEMS.length - 1, prev + 1));
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Fixed background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
          backgroundColor: "#050508",
        }}
      >
        <Threads
          amplitude={3.2}
          distance={0.8}
          enableMouseInteraction={false}
        />
      </div>

      {/* Scrollable content */}
      <Section
        style={{ background: "transparent", position: "relative", zIndex: 1 }}
        contentPosition="top"
      >
        <div className="section-content">
          <ScrollFloat stagger={0.04}>Experience</ScrollFloat>
          <div
            style={{
              maxWidth: "800px",
              width: "100%",
              margin: "0 auto",
              position: "relative",
              padding: "0 1rem",
            }}
          >
            {/* Carousel Container */}
            <div
              ref={containerRef}
              style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
              }}
            >
              <motion.div
                style={{
                  display: "flex",
                  gap: `${gap}px`,
                  x,
                  width: "fit-content",
                }}
              >
                {EXPERIENCE_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      width: `${containerWidth}px`,
                      flexShrink: 0,
                    }}
                  >
                    <ExperienceItem item={item} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons and Indicators */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "2rem",
                padding: "0 1rem",
              }}
            >
              <button
                onClick={handlePrevious}
                disabled={position === 0}
                style={{
                  background: position === 0 ? "#333" : "#809fff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                  cursor: position === 0 ? "not-allowed" : "pointer",
                  opacity: position === 0 ? 0.5 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                ← Previous
              </button>

              {/* Indicators */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {EXPERIENCE_ITEMS.map((_, index) => (
                  <motion.div
                    key={index}
                    onClick={() => setPosition(index)}
                    style={{
                      height: "8px",
                      width: "8px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      backgroundColor: position === index ? "#fff" : "#555",
                      transition: "background-color 0.15s",
                    }}
                    animate={{
                      scale: position === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.15 }}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={position === EXPERIENCE_ITEMS.length - 1}
                style={{
                  background:
                    position === EXPERIENCE_ITEMS.length - 1
                      ? "#333"
                      : "#809fff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                  cursor:
                    position === EXPERIENCE_ITEMS.length - 1
                      ? "not-allowed"
                      : "pointer",
                  opacity: position === EXPERIENCE_ITEMS.length - 1 ? 0.5 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Experience;
