import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../data/users.json';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const allUsers = [...users.merchants, ...users.collaborators];
    const user = allUsers.find((u) => u.username === username && u.password === password);

    if (user) {
      const token = `fake-jwt-token-for-${user.username}`;
      localStorage.setItem('token', token);
      localStorage.setItem('role', user.role);

      if (user.role === 'merchant') {
        navigate('/merchant');
      } else if (user.role === 'collaborator') {
        navigate('/collaborator');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ padding: '40px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '24px', color: '#333' }}>Login</h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username"
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password"
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '12px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;