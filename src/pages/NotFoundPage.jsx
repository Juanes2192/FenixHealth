import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f9fa', textAlign: 'center', color: '#343a40' }}>
      <h1 style={{ fontSize: '10rem', margin: 0, fontWeight: 700 }}>404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Página no encontrada</p>
      <p style={{ marginBottom: '2rem', color: '#6c757d' }}>
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link to="/" style={{ textDecoration: 'none', padding: '1rem 2rem', backgroundColor: '#007bff', color: 'white', borderRadius: '5px', fontSize: '1rem' }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
