import { Router } from 'express';
import { protect } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/role.middleware.js';

import {
  createAdmin,
  createCoach,
  createAthlete
} from '../controllers/user.controller.js';

const router = Router();

/* PERFIL */
router.get('/profile', protect, (req, res) => {
  res.json(req.user);
});

/* SUPERADMIN crea ADMIN */
router.post(
  '/admin',
  protect,
  authorize('superadmin'),
  createAdmin
);

/* ADMIN crea COACH */
router.post(
  '/coach',
  protect,
  authorize('admin'),
  createCoach
);

/* COACH crea ATHLETE */
router.post(
  '/athlete',
  protect,
  authorize('coach'),
  createAthlete
);

export default router;