import Section from "../components/Section";
import ScrollFloat from "../components/ScrollFloat";
import Galaxy from "../components/Galaxy";
import ElectricBorder from "../components/ElectricBorder";

function Education() {
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
          backgroundColor: "#000000",
        }}
      >
        <Galaxy
          glowIntensity={0.5}
          saturation={0.5}
          hueShift={180}
          twinkleIntensity={0.5}
          rotationSpeed={0.05}
          mouseRepulsion={false}
          mouseInteraction={false}
        />
      </div>

      {/* Scrollable content */}
      <Section
        style={{ background: "transparent", position: "relative", zIndex: 1 }}
        contentPosition="top"
      >
        <div className="section-content">
          <ScrollFloat stagger={0.04}>Education</ScrollFloat>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              maxWidth: "1100px",
              margin: "0 auto",
              width: "100%",
              alignItems: "center",
            }}
          >
            <ElectricBorder
              color="#809fff"
              speed={1}
              chaos={0.03}
              borderRadius={12}
              style={{
                width: "100%",
                maxWidth: "1100px",
              }}
            >
              <div
                style={{
                  background: "#0a0a0a",
                  padding: "3rem",
                  borderRadius: "12px",
                  width: "100%",
                }}
              >
                <h3
                  className="education-degree"
                  style={{
                    color: "#fff",
                    fontSize: "1.5rem",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  B.S. Computer Science
                </h3>
                <p
                  className="education-school"
                  style={{
                    color: "#aaa",
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    fontStyle: "italic",
                  }}
                >
                  <a
                    href="https://uci.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#809fff",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#a8bfff")}
                    onMouseLeave={(e) => (e.target.style.color = "#809fff")}
                  >
                    University of California, Irvine
                  </a>
                </p>
                <p
                  className="education-details"
                  style={{
                    color: "#888",
                    fontSize: "0.9rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Expected Graduation: June 2028 • GPA: 3.9
                </p>

                <div style={{ marginBottom: "2rem" }}>
                  <h4
                    className="education-section-title"
                    style={{
                      color: "#fff",
                      fontSize: "1.2rem",
                      marginBottom: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    Relevant Coursework:
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      className="education-course"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                        padding: "1rem 1.5rem",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: 500,
                        textAlign: "center",
                        minWidth: "fit-content",
                        flex: "1 1 auto",
                      }}
                    >
                      Data Structures and Algorithms
                    </div>
                    <div
                      className="education-course"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                        padding: "1rem 1.5rem",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: 500,
                        textAlign: "center",
                        minWidth: "fit-content",
                        flex: "1 1 auto",
                      }}
                    >
                      Advanced Programming In Python
                    </div>
                    <div
                      className="education-course"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                        padding: "1rem 1.5rem",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: 500,
                        textAlign: "center",
                        minWidth: "fit-content",
                        flex: "1 1 auto",
                      }}
                    >
                      Programming In C++
                    </div>
                    <div
                      className="education-course"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                        padding: "1rem 1.5rem",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: 500,
                        textAlign: "center",
                        minWidth: "fit-content",
                        flex: "1 1 auto",
                      }}
                    >
                      Discrete Math
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: "center" }}>
                  <h4
                    className="education-section-title"
                    style={{
                      color: "#fff",
                      fontSize: "1.2rem",
                      marginBottom: "0.75rem",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    Leadership & Activities:
                  </h4>
                  <ul
                    className="education-activity"
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.8",
                      paddingLeft: 0,
                      margin: "0 auto",
                      textAlign: "center",
                      listStyle: "none",
                      display: "inline-block",
                    }}
                  >
                    <li style={{ color: "#fff", marginBottom: "0.5rem" }}>
                      Director Of Housing — Sigma Pi (Eta-Upsilon Chapter)
                    </li>
                  </ul>
                </div>
              </div>
            </ElectricBorder>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Education;
