import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./NavbarLanding.module.css";

export default function NavbarLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          {/* Bootstrap utilities se quedan como string */}
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link href="#inicio" className={styles.navLink}>
              Inicio
            </Nav.Link>
            <Nav.Link href="#servicios" className={styles.navLink}>
              Servicios
            </Nav.Link>
            <Nav.Link href="#beneficios" className={styles.navLink}>
              Beneficios
            </Nav.Link>
            <Nav.Link href="#contacto" className={styles.navLink}>
              Contacto
            </Nav.Link>

            {/* Botón: combinamos global + módulo */}
            <Button className={`btn-primary-custom ms-lg-3`}>
              Ingresar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
