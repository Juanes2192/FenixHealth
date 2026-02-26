import {
  FaChartLine,
  FaBrain,
  FaClock,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import styles from "./Benefits.module.css";

export default function Benefits() {
  const benefits = [
    {
      icon: <FaChartLine />,
      title: "Mejor rendimiento deportivo",
      text: "Optimiza el desempeño de tus atletas con información precisa y estructurada.",
    },
    {
      icon: <FaBrain />,
      title: "Decisiones basadas en datos",
      text: "Analiza métricas reales para tomar decisiones estratégicas inteligentes.",
    },
    {
      icon: <FaClock />,
      title: "Ahorro de tiempo en gestión",
      text: "Automatiza procesos y reduce tareas administrativas repetitivas.",
    },
    {
      icon: <FaUsers />,
      title: "Control claro del equipo",
      text: "Visualiza el estado completo de cada jugador y del equipo en general.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Información segura",
      text: "Protección y centralización de datos en un entorno confiable.",
    },
  ];

  return (
    <section id="beneficios" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Resultados reales para entrenadores y equipos profesionales</h2>
        </div>

        <div className={styles.timeline}>
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                index % 2 === 0 ? styles.top : styles.bottom
              }`}
            >
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <div className={styles.node}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}