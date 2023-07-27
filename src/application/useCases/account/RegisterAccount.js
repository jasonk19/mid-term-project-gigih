import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import accountDatabase from '../../../infrastructure/database/account/AccountDatabase.js';

export async function registerAccountUseCase({ name, username, password }) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const accountExist = await accountDatabase.findAccount(username);

  if (accountExist) {
    const error = new Error('Username has been used');
    error.statusCode = 400;
    throw error;
  }

  const account = await accountDatabase.createAccount({
    name,
    username,
    hashedPassword
  })

  const token = jwt.sign({
    _id: account._id,
    name: account.name,
    username: account.username
  }, process.env.PRIVATE_KEY);

  return token;
}