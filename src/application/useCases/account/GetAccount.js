import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import accountDatabase from "../../../infrastructure/database/account/AccountDatabase.js";

export async function getAccountUseCase(username, password) {
  const account = await accountDatabase.findAccount(username);

  if (!account) {
    const error = new Error('Account does not exist');
    error.statusCode = 400;
    throw error;
  }

  const passwordHash = account.password;

  const match = await bcrypt.compare(password, passwordHash);

  if (!match) {
    const error = new Error('Password does not match')
    error.statusCode = 401;
    throw error;
  }

  const token = jwt.sign({
    _id: account._id,
    name: account.name,
    username: account.username
  }, process.env.PRIVATE_KEY, { expiresIn: 60 * 60 * 60 });

  return token;
}