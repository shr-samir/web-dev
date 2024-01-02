import { Router } from 'express';

import {
  getUserByEmail,
  // getUserById,
  getUsers
} from '../controller/user';

const router = Router();

router.get('/', getUsers);
// router.get('/:id', getUserById);
router.get('/:email', getUserByEmail);

export default router;