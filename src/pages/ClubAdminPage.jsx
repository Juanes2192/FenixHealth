import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClubAdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ padding: '40px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '24px', color: '#333' }}>Bienvenido Admin del Club</h1>
        <button onClick={handleLogout} style={{ padding: '12px 24px', borderRadius: '4px', border: 'none', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ClubAdminPage;