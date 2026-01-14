import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find which section is currently in view
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          style={{
            background: "none",
            border: "none",
            color: activeSection === item.id ? "#fff" : "#888",
            fontSize: "0.9rem",
            fontWeight: activeSection === item.id ? 600 : 400,
            cursor: "pointer",
            padding: "0.5rem 1rem",
            position: "relative",
            transition: "color 0.3s ease",
            fontFamily: "inherit",
          }}
        >
          {item.label}
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: activeSection === item.id ? "100%" : "0%",
              height: "2px",
              background: "#fff",
              transition: "width 0.3s ease",
            }}
          />
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
