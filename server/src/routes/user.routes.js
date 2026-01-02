import { Router } from 'express';
import { protect } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/role.middleware.js';

const router = Router();

// Ruta privada (cualquier usuario autenticado)
router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Access granted',
    user: req.user
  });
});

// Ruta solo admin / superAdmin
router.get('/admin', protect, authorize('admin', 'superAdmin'), (req, res) => {
  res.json({
    message: 'Admin access granted'
  });
});

export default router;
