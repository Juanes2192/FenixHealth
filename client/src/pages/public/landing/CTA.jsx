import { Container, Button } from "react-bootstrap";
import styles from "./CTA.module.css";

export default function CTA() {
    return (
        <section id="contacto" className={styles.section}>
            <Container className="text-center">
                <h2 className={styles.title}>
                    Lleva tu gestión deportiva al siguiente nivel
                </h2>

                <p className={styles.text}>
                    Empieza hoy y transforma la forma en que entrenas y analizas el deporte.
                </p>

                <Button className="btn-primary-custom">
                    Comenzar ahora
                </Button>
            </Container>
        </section>
    );
}
