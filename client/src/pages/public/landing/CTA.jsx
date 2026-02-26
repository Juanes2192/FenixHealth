import { useState } from "react";
import axios from "../../../api/axios";
import styles from "./CTA.module.css";

const CTA = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    applicantType: "individual",
    organizationName: "",
    message: "",
    acceptPolicy: false,
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setResponseMessage(null);

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.acceptPolicy) {
      return setResponseMessage(
        "Debes aceptar la política de tratamiento de datos."
      );
    }

    if (
      form.applicantType === "organization" &&
      !form.organizationName
    ) {
      return setResponseMessage(
        "Debes ingresar el nombre de la organización."
      );
    }

    try {
      setLoading(true);

      const { data } = await axios.post("/leads", form);

      setResponseMessage(data.message);

      setForm({
        name: "",
        email: "",
        phone: "",
        applicantType: "individual",
        organizationName: "",
        message: "",
        acceptPolicy: false,
      });
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message ||
        "Error al enviar la solicitud."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className={styles.ctaSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Solicita una demostración</h2>

        <p className={styles.subtitle}>
          Déjanos tus datos y te contactaremos para mostrarte cómo
          AMS puede transformar tu gestión deportiva.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={form.name}
            onChange={handleChange}
            required
          />

          {/* EMAIL + PHONE EN MISMA LÍNEA */}
          <div className={styles.row}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          {/* SOLICITANTE */}
          <div className={styles.radioGroup}>
            <span className={styles.label}>Solicitante:</span>

            <div className={styles.radioOptions}>
              <label>
                <input
                  type="radio"
                  name="applicantType"
                  value="individual"
                  checked={form.applicantType === "individual"}
                  onChange={handleChange}
                />
                Persona natural / Entrenador
              </label>

              <label>
                <input
                  type="radio"
                  name="applicantType"
                  value="organization"
                  checked={form.applicantType === "organization"}
                  onChange={handleChange}
                />
                Empresa / Club / Organización
              </label>
            </div>
          </div>

          {form.applicantType === "organization" && (
            <input
              className={styles.input}
              type="text"
              name="organizationName"
              placeholder="Nombre de la empresa / club"
              value={form.organizationName}
              onChange={handleChange}
              required
            />
          )}

          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Cuéntanos sobre tu equipo o necesidades"
            value={form.message}
            onChange={handleChange}
          />

          <div className={styles.policy}>
            <label>
              <input
                type="checkbox"
                name="acceptPolicy"
                checked={form.acceptPolicy}
                onChange={handleChange}
              />
              Autorizo el tratamiento de mis datos personales conforme a la
              política de privacidad de AMS.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={styles.button}
          >
            {loading ? "Enviando..." : "Solicitar demostración"}
          </button>

          {responseMessage && (
            <p className={styles.response}>{responseMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default CTA;