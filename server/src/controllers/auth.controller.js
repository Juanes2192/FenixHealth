import { registerUser, loginUser } from '../services/auth.service.js';

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { user, token } = await loginUser(req.body);

    // Emitir evento global (opcional)
    req.app.get('io')?.emit('user:login', {
      userId: user._id,
      email: user.email
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
