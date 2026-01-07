import api from '../../api/axios';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const { login } = useAuth();

  const handleLogin = async () => {
    const res = await api.post('/auth/login', {
      email: 'test@test.com',
      password: '123456'
    });

    login(res.data);
  };

  return <button onClick={handleLogin}>Login</button>;
}
