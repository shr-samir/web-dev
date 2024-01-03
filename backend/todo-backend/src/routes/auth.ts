import { Router } from 'express';

import { signup, login, refresh } from '../controller/auth';
import { validateReqBody } from '../middleware/validator';
import { loginSchema, signupSchema } from '../schema/user';

const router = Router();

router.post('/signup',validateReqBody(signupSchema), signup);

router.post('/login', validateReqBody(loginSchema) ,login);

router.post('/refresh', refresh)

export default router;