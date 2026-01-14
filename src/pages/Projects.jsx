import Section from "../components/Section";
import ScrollFloat from "../components/ScrollFloat";
import PixelBlast from "../components/PixelBlast";
import FlowingMenu from "../components/FlowingMenu";

const projectItems = [
  {
    link: "https://github.com/alieldaoushyuci/Construction-Verification",
    text: "Construction Verification",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "https://github.com/Ivan-Shishkin-Dev/ivan-shishkin-dev.github.io",
    text: "New Website",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "https://ivan-shishkin-dev.github.io/Old-Website/",
    text: "Old Website",
    image: "https://picsum.photos/600/400?random=3",
  },
];

function Projects() {
  return (
    <Section
      style={{ background: "#050508" }}
      contentPosition="top"
      background={<PixelBlast patternScale={3.5} />}
    >
      <div className="section-content">
        <ScrollFloat stagger={0.04}>Projects</ScrollFloat>
        <div
          style={{
            marginTop: "3rem",
          }}
          className="projects-menu-container"
        >
          <div
            className="projects-menu-wrapper"
            style={{
              height: "600px",
              position: "relative",
              backgroundColor: "transparent",
              padding: "2rem",
              borderRadius: "12px",
              transition: "background-color 0.3s ease",
            }}
          >
            <FlowingMenu items={projectItems} />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
