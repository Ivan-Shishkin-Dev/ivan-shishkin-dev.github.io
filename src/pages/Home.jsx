import headshot from "../assets/Ivan Shishkin Headshot.JPG";
import BlurText from "../components/BlurText";
import ShinyText from "../components/ShinyText";
import SpotlightCard from "../components/SpotlightCard";
import GlassIcons from "../components/GlassIcons";
import Section from "../components/Section";
import LogoLoop from "../components/LogoLoop";
import LetterGlitch from "../components/LetterGlitch";
import {
  ReactIcon,
  NodeIcon,
  PythonIcon,
  JavaScriptIcon,
  HTMLIcon,
  CSSIcon,
  ViteIcon,
  SupabaseIcon,
  CPlusPlusIcon,
  SQLIcon,
  DockerIcon,
  GitIcon,
} from "../components/Icons";
import { GmailIcon, GitHubIcon, LinkedInIcon } from "../components/Icons";

// Skill links
const skills = [
  { node: <ReactIcon />, title: "React", ariaLabel: "React" },
  { node: <NodeIcon />, title: "Node.js", ariaLabel: "Node.js" },
  { node: <PythonIcon />, title: "Python", ariaLabel: "Python" },
  { node: <JavaScriptIcon />, title: "JavaScript", ariaLabel: "JavaScript" },
  { node: <HTMLIcon />, title: "HTML", ariaLabel: "HTML" },
  { node: <CSSIcon />, title: "CSS", ariaLabel: "CSS" },
  { node: <ViteIcon />, title: "Vite", ariaLabel: "Vite" },
  { node: <SupabaseIcon />, title: "Supabase", ariaLabel: "Supabase" },
  { node: <CPlusPlusIcon />, title: "C++", ariaLabel: "C++" },
  { node: <SQLIcon />, title: "SQL", ariaLabel: "SQL" },
  { node: <DockerIcon />, title: "Docker", ariaLabel: "Docker" },
  { node: <GitIcon />, title: "Git", ariaLabel: "Git" },
];

// Social links
const socialLinks = [
  {
    icon: <GmailIcon />,
    color: "gray",
    label: "Email",
    copyText: "shishkinivan2006@gmail.com",
  },
  {
    icon: <GitHubIcon />,
    color: "gray",
    label: "GitHub",
    link: "https://github.com/Ivan-Shishkin-Dev",
  },
  {
    icon: <LinkedInIcon />,
    color: "gray",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ivan-shishkin-dev",
  },
];

function Home() {
  return (
    <Section
      background={
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      }
      style={{ background: "#000000" }}
    >
      <div className="intro">
        <div className="headshot-wrapper">
          <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.3)">
            <img src={headshot} alt="Ivan Shishkin" className="headshot" />
          </SpotlightCard>
        </div>
        <div
          className="intro-text"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            padding: "1.5rem",
            paddingBottom: "2.5rem",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "visible",
          }}
        >
          <BlurText
            text="Hi, I'm Ivan Shishkin"
            className="greeting"
            delay={100}
            animateBy="words"
          />
          <h2 className="title">
            <ShinyText text="Software Engineer" speed={3} />
          </h2>
          <GlassIcons items={socialLinks} animateIn />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "3rem auto 0",
          padding: "2rem",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "8px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <LogoLoop
          logos={skills}
          speed={80}
          direction="left"
          logoHeight={48}
          gap={48}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="#000000"
          scaleOnHover={true}
          ariaLabel="Technology skills"
          renderItem={(item) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                whiteSpace: "nowrap",
              }}
            >
              <span className="logoloop__node">{item.node}</span>
              <span
                style={{
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 500,
                  opacity: 0.9,
                }}
              >
                {item.title}
              </span>
            </div>
          )}
        />
      </div>
    </Section>
  );
}

export default Home;
