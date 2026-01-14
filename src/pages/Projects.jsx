import Section from "../components/Section";
import ScrollFloat from "../components/ScrollFloat";
import PixelBlast from "../components/PixelBlast";
import FlowingMenu from "../components/FlowingMenu";

const projectItems = [
  {
    link: "#",
    text: "Project One",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Project Two",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Project Three",
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
