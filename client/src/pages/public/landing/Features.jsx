import { 
  FaCalendarAlt, 
  FaChartLine, 
  FaLayerGroup, 
  FaHeartbeat 
} from "react-icons/fa";
import styles from "./Features.module.css";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

export default function Features() {
  useScrollAnimation();

  const features = [
    {
      icon: <FaCalendarAlt />,
      title: "Calendario de eventos",
      text: "Organiza entrenamientos, partidos y competencias en un solo calendario centralizado.",
    },
    {
      icon: <FaChartLine />,
      title: "Seguimiento de pruebas",
      text: "Registra datos de rendimiento y analiza el progreso mediante gráficos deportivos.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Administración de deportes",
      text: "Gestiona múltiples disciplinas desde una sola plataforma adaptable.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Seguimiento de salud",
      text: "Controla datos clave para cuidar el bienestar y la carga del atleta.",
    },
  ];

  return (
    <section id="servicios" className={`${styles.section} fade-up`}>
      <div className="container"> {/* si ya tienes container global */}
        
        <h2 className={styles.title}>
          Todo lo que necesitas para una gestión deportiva profesional
        </h2>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <div key={index} className={styles.card}>
              
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>

              <h3 className={styles.cardTitle}>
                {item.title}
              </h3>

              <p className={styles.cardText}>
                {item.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}