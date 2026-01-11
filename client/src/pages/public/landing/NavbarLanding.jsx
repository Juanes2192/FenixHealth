import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./landing.css";

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
      className={`landing-navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand className="navbar-brand-custom">
  <div className="brand-wrapper">
    <span className="brand-acronym">AMS</span>
    <span className="brand-full">Athlete Management Services</span>
  </div>
</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link href="#inicio" className="nav-link-custom">
              Inicio
            </Nav.Link>
            <Nav.Link href="#servicios" className="nav-link-custom">
              Servicios
            </Nav.Link>
            <Nav.Link href="#beneficios" className="nav-link-custom">
              Beneficios
            </Nav.Link>
            <Nav.Link href="#contacto" className="nav-link-custom">
              Contacto
            </Nav.Link>

            <Button className="btn-primary-custom ms-lg-3">
              Ingresar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
