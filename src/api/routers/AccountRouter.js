import express from 'express';
import { registerAccountController } from '../controllers/account/RegisterAccountController';
import { loginAccountController } from '../controllers/account/LoginAccountController';

const router = express.Router();

router.post('/register', registerAccountController);

router.post('/login', loginAccountController);

export default router