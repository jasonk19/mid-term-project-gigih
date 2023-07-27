import express from 'express';
import { registerAccountController } from '../controllers/account/RegisterAccountController.js';
import { loginAccountController } from '../controllers/account/LoginAccountController.js';

const router = express.Router();

router.post('/register', registerAccountController);

router.post('/login', loginAccountController);

export { router as accountRouter }