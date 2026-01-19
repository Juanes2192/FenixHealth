import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <h1 className={styles.title}>
                            Gestiona, analiza y potencia el rendimiento deportivo
                        </h1>

                        <p className={styles.subtitle}>
                            Plataforma inteligente para entrenadores, clubes y atletas que
                            buscan control total sobre entrenamientos, eventos, rendimiento y
                            salud.
                        </p>

                        <div className={styles.actions}>
                            <Button className="btn-primary-custom">
                                Empieza ahora
                            </Button>

                            <Button
                                variant="outline-primary"
                                className="btn-outline-custom"
                            >
                                Solicitar demo
                            </Button>
                        </div>
                    </Col>

                    <Col md={6} className="text-center">
                        <div className={styles.mockup}>
                            Dashboard Preview
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
