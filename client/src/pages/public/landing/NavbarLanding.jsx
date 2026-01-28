import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./NavbarLanding.module.css";

const sections = ["inicio", "servicios", "beneficios", "contacto"];

export default function NavbarLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  /* Scroll visual */
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Section observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <Container fluid>
        <Navbar.Brand>
          <div className={styles.brandWrapper}>
            <span className={styles.brandAcronym}>AMS</span>
            <span className={styles.brandFull}>
              Athlete Management Services
            </span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            {sections.map(section => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className={`${styles.navLink} ${
                  activeSection === section ? styles.active : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}

            <Button className="btn-primary-custom ms-lg-3">
              Ingresar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
