import { useLocation } from "react-router-dom";
import StaggeredMenu from "./StaggeredMenu";
import PillNav from "./PillNav";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Go to about page", link: "/about" },
  {
    label: "Experience",
    ariaLabel: "Go to experience page",
    link: "/experience",
  },
  {
    label: "Education",
    ariaLabel: "Go to education page",
    link: "/education",
  },
  { label: "Projects", ariaLabel: "Go to projects page", link: "/projects" },
];

const socialMenuItems = [
  { label: "Email", link: "mailto:shishkinivan2006@gmail.com" },
  { label: "GitHub", link: "https://github.com/Ivan-Shishkin-Dev" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/ivan-shishkin-dev" },
];

function Layout({ children }) {
  const location = useLocation();
  const activeSection = location.pathname === "/" ? "/" : location.pathname;

  // Convert menuItems to PillNav format (with href instead of link)
  const pillNavItems = menuItems.map((item) => ({
    label: item.label,
    href: item.link,
    ariaLabel: item.ariaLabel,
  }));

  return (
    <div>
      {/* PillNav - Menu bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1001,
          display: "flex",
          justifyContent: "center",
          paddingTop: "1em",
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "all" }}>
          <PillNav
            items={pillNavItems}
            activeHref={activeSection}
            className="custom-nav"
            baseColor="#fff"
            pillColor="#060010"
            hoveredPillTextColor="#060010"
          />
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialMenuItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          accentColor="#5227FF"
          isFixed={true}
          closeOnClickAway={true}
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>

      {children}
    </div>
  );
}

export default Layout;
