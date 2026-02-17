// Hero.jsx
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        {/* LADO IZQUIERDO – TEXTO */}
        <header className={styles.content}>
          <h1 className={styles.title}>
            Gestiona equipos deportivos <br />
            <span>con control, claridad y rendimiento</span>
          </h1>

          <p className={styles.subtitle}>
            Centraliza entrenamientos, horarios y comunicación del equipo
            en una sola plataforma diseñada para entrenadores, clubes
            y organizaciones deportivas.
          </p>

          <div className={styles.actions}>
            <button className={styles.ctaPrimary}>
              Solicitar demo
            </button>

            <button className={styles.ctaSecondary}>
              Ingresar a la plataforma
            </button>
          </div>
        </header>

        {/* LADO DERECHO – PREVIEW */}
        <figure className={styles.visual}>
          <div className={styles.mockup}>
            <span>Dashboard Preview</span>
          </div>
        </figure>
      </div>
    </section>
  );
}
