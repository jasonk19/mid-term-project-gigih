import bcrypt from 'bcrypt';
import { AccountCollection } from './AccountSchema';

export async function createAccount({name, username, hashedPassword}) {
  const account = await AccountCollection.create({
    name,
    username,
    password: hashedPassword
  })

  return account;
}

export async function getAccount(username) {
  const account = await AccountCollection.findOne({
    username
  })

  return account;
}