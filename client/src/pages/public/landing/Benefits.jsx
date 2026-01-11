import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./landing.css";

export default function Benefits() {
    const benefits = [
        "Mejor rendimiento deportivo",
        "Decisiones basadas en datos",
        "Ahorro de tiempo en gestión",
        "Control claro del equipo",
        "Información segura",
    ];


    return (
        <section id="beneficios" className="benefits-section">
            <Container>
                <h2 className="section-title text-center mb-4">
                    Diseñado para mejorar decisiones, no solo registrar datos
                </h2>
                <Row className="g-4">
                    {benefits.map((benefit, index) => (
                        <Col md={4} key={index}>
                            <div className="benefit-box">{benefit}</div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}