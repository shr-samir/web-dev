import { Router } from 'express';

import userRoutes from './user';
import authRoutes from './auth';
import todoRoutes from './todo';

import { authJwt } from '../middleware/authJwt';

const router = Router();

router.use(authRoutes);
router.use('/users', userRoutes);
router.use('/todos', authJwt, todoRoutes);

export default router;

//changes made