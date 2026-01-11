import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./landing.css";
import useScrollAnimation from "../../../hooks/useScrollAnimation";


export default function Features() {
    useScrollAnimation();

    const features = [
        {
            title: "Calendario de eventos",
            text: "Organiza entrenamientos, partidos y competencias en un solo calendario centralizado.",
        },
        {
            title: "Seguimiento de pruebas",
            text: "Registra datos de rendimiento y analiza el progreso mediante gráficos deportivos.",
        },
        {
            title: "Administración de deportes",
            text: "Gestiona múltiples disciplinas desde una sola plataforma adaptable.",
        },
        {
            title: "Seguimiento de salud",
            text: "Controla datos clave para cuidar el bienestar y la carga del atleta.",
        },
    ];


    return (
        <section id="servicios" className="features-section fade-up">
            <Container>
                <h2 className="section-title text-center">
                    Todo lo que necesitas para una gestión deportiva profesional
                </h2>
                <Row className="g-4">
                    {features.map((item, index) => (
                        <Col md={6} lg={3} key={index}>
                            <Card className="feature-card h-100">
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}