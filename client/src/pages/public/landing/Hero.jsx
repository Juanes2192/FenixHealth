import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./landing.css";

export default function Hero() {
    return (
        <section id="inicio" className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <h1 className="hero-title">
                            Gestiona, analiza y potencia el rendimiento deportivo
                        </h1>
                        <p className="hero-subtitle">
                            Plataforma inteligente para entrenadores, clubes y atletas que buscan control total sobre entrenamientos, eventos, rendimiento y salud.
                        </p>
                        <div className="hero-actions">
                            <Button className="btn-primary-custom">
                                Empieza ahora
                            </Button>
                            <Button variant="outline-primary" className="btn-outline-custom">
                                Solicitar demo
                            </Button>
                        </div>
                    </Col>
                    <Col md={6} className="text-center">
                        <div className="hero-mockup">Dashboard Preview</div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}