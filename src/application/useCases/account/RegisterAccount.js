import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import accountDatabase from '../../../infrastructure/database/account/AccountDatabase';

export async function registerAccountUseCase({ name, username, password }) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const account = await accountDatabase.createAccount({
    name,
    username,
    hashedPassword
  })

  const token = jwt.sign({
    _id: account._id,
    name: account.name,
    username: account.username
  });

  return token;
}