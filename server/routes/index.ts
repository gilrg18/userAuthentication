import { Router } from 'express';

import userRouter from './user';
import authRouter from './authenticate'

const router = Router()

router.use('/auth', authRouter);
router.use('/users', userRouter);

export default router