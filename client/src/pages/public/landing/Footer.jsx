import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Izquierda */}
        <div className={styles.left}>
          <span className={styles.brand}>AMS</span>
        </div>

        {/* Centro */}
        <div className={styles.center}>
          © {new Date().getFullYear()} Todos los derechos reservados.
        </div>

        {/* Derecha */}
        <div className={styles.right}>
          <span className={styles.follow}>Síguenos</span>
          <div className={styles.social}>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/athletemanagementservices?igsh=MW5rbTJ0OHF5d2tqZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1Fyu6y3SQW/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            {/* X */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;