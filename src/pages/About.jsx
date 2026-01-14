import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Section from "../components/Section";
import ScrollFloat from "../components/ScrollFloat";
import SimpleSquares from "../components/SimpleSquares";
import FadeIn from "../components/FadeIn";
import TextType from "../components/TextType";
import ElectricBorder from "../components/ElectricBorder";

function About() {
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);
  const [showTitle2, setShowTitle2] = useState(false);
  const [showTitle3, setShowTitle3] = useState(false);

  useEffect(() => {
    // Set initial state for paragraphs (off-screen to the right)
    gsap.set([paragraph1Ref.current, paragraph2Ref.current, paragraph3Ref.current], {
      x: 100,
      opacity: 0,
    });
  }, []);

  const handleTitle1Complete = () => {
    if (paragraph1Ref.current) {
      gsap.to(paragraph1Ref.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          // Start title 2 immediately after slide-in completes
          setShowTitle2(true);
        }
      });
    }
  };

  const handleTitle2Complete = () => {
    if (paragraph2Ref.current) {
      gsap.to(paragraph2Ref.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          // Start title 3 immediately after slide-in completes
          setShowTitle3(true);
        }
      });
    }
  };

  const handleTitle3Complete = () => {
    if (paragraph3Ref.current) {
      gsap.to(paragraph3Ref.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  };

  return (
    <Section
      style={{ background: "#0a0a0a" }}
      contentPosition="top"
      background={
        <SimpleSquares
          squareSize={40}
          borderColor="#fff"
          speed={0.5}
          direction="diagonal"
        />
      }
    >
      <div className="section-content">
        <ScrollFloat stagger={0.04}>About Me</ScrollFloat>
        <ElectricBorder
          color="#809fff"
          speed={1}
          chaos={0.03}
          borderRadius={12}
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            marginTop: "3rem",
          }}
        >
          <FadeIn
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              textAlign: "center",
              backgroundColor: "#0a0a0a",
              padding: "2rem",
              borderRadius: "12px",
            }}
          >
          <div>
            <TextType
              as="h3"
              text={["Who I Am"]}
              typingSpeed={42}
              pauseDuration={1500}
              initialDelay={500}
              showCursor={true}
              cursorCharacter="|"
              loop={false}
              onSentenceComplete={handleTitle1Complete}
              className="about-title"
              style={{
                color: "#fff",
                fontSize: "1.3rem",
                marginBottom: "0.75rem",
                fontWeight: 600,
                textAlign: "center",
              }}
            />
            <p ref={paragraph1Ref} className="section-text">
              I'm Ivan Shishkin, a Computer Science student at UCI focused on
              building systems that are reliable, understandable, and grounded
              in clean fundamentals. Currently, I specialize in full-stack
              application development.
            </p>
          </div>
          <div>
            {showTitle2 && (
              <TextType
                as="h3"
                text={["Where I Come From"]}
                typingSpeed={42}
                pauseDuration={1500}
                initialDelay={0}
                showCursor={true}
                cursorCharacter="|"
                loop={false}
                onSentenceComplete={handleTitle2Complete}
                className="about-title"
                style={{
                  color: "#fff",
                  fontSize: "1.3rem",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              />
            )}
            <p ref={paragraph2Ref} className="section-text">
              I didn't grow up with much, so discipline and persistence aren't
              optional for me. They shaped how I approach work: break problems
              down, understand the core idea, and build solutions that hold up
              under pressure.
            </p>
          </div>
          <div>
            {showTitle3 && (
              <TextType
                as="h3"
                text={["How I Work"]}
                typingSpeed={42}
                pauseDuration={1500}
                initialDelay={0}
                showCursor={true}
                cursorCharacter="|"
                loop={false}
                onSentenceComplete={handleTitle3Complete}
                className="about-title"
                style={{
                  color: "#fff",
                  fontSize: "1.3rem",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              />
            )}
            <p ref={paragraph3Ref} className="section-text">
              I value clean architecture, clear reasoning, and deliberate
              execution. My interests lean toward systems and back-end
              engineering. As my expertise grows, I'm excited to explore more.
            </p>
          </div>
        </FadeIn>
        </ElectricBorder>
      </div>
    </Section>
  );
}

export default About;
