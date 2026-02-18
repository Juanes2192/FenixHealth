import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        
        {/* TEXTO */}
        <header className={styles.content}>
          <h1 className={styles.title}>
            Gestión de equipos deportivos <br />
            <span>con control, claridad y rendimiento.</span>
          </h1>

          <p className={styles.subtitle}>
            Centraliza entrenamientos, asistencia, comunicación y planificación 
            en una sola plataforma diseñada para entrenadores y organizaciones deportivas.
          </p>

          <div className={styles.actions}>
            <button className={styles.ctaPrimary}>
              Solicitar demostración
            </button>

            <button className={styles.ctaSecondary}>
              Ingresar a la plataforma
            </button>
          </div>
        </header>

        {/* PREVIEW REAL */}
        <figure className={styles.visual}>
          <div className={styles.mockup}>
            <span className={styles.previewText}>
              Vista previa de la plataforma
            </span>
          </div>
        </figure>

      </div>
    </section>
  );
}
