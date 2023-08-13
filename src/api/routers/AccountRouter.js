import express from 'express';
import { registerAccountController } from '../controllers/account/RegisterAccountController.js';
import { loginAccountController } from '../controllers/account/LoginAccountController.js';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { getAccountDetailController } from '../controllers/account/GetAccountDetailController.js';

const router = express.Router();

router.post('/register', registerAccountController);

router.post('/login', loginAccountController);

router.get('/validate', verifyToken, getAccountDetailController);

export { router as accountRouter }