import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./landing.css";

export default function CTA() {
    return (
        <section id="contacto" className="cta-section">
            <Container className="text-center">
                <h2 className="cta-title">Lleva tu gestión deportiva al siguiente nivel</h2>
                <p className="cta-text">
                    Empieza hoy y transforma la forma en que entrenas y analizas el deporte.
                </p>
                <Button className="btn-primary-custom">
                    Comenzar ahora
                </Button>
            </Container>
        </section>
    );
}