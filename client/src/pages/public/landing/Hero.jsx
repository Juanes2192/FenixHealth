// Hero.jsx
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.container}>
                {/* TEXTO */}
                <header className={styles.content}>
                    <h1 className={styles.title}>
                        Gestiona equipos deportivos de forma simple y organizada
                    </h1>

                    <p className={styles.subtitle}>
                        Organiza entrenamientos, horarios y comunicación del equipo desde
                        una sola plataforma, con herramientas avanzadas para el seguimiento
                        del rendimiento deportivo.
                    </p>

                    <div className={styles.actions}>
                        {/* CTA PRINCIPAL */}
                        <button className={styles.ctaPrimary}>
                            Solicitar demo
                        </button>

                        {/* CTA SECUNDARIO */}
                        <button className={styles.ctaSecondary}>
                            Ingresar a la plataforma
                        </button>
                    </div>
                </header>

                {/* VISUAL */}
                <figure className={styles.visual}>
                    <div className={styles.mockup}>
                        Dashboard Preview
                    </div>
                </figure>
            </div>
        </section>
    );
}
