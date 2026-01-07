import { createContext, useContext, useEffect, useState } from 'react';
import { socket } from '../api/socket';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setUser({ token });
      socket.connect();
    }

    setLoading(false);
  }, []);

  const login = ({ token, user }) => {
    localStorage.setItem('token', token);
    setUser(user);
    socket.connect();
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    socket.disconnect();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
