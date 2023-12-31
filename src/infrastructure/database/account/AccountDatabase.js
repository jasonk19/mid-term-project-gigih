import bcrypt from 'bcrypt';
import { AccountCollection } from './AccountSchema.js';

class AccountDatabase {
  async createAccount({name, username, hashedPassword}) {
    const account = await AccountCollection.create({
      name,
      username,
      password: hashedPassword
    })
  
    return account;
  }
  
  async findAccount(username) {
    const account = await AccountCollection.findOne({
      username
    })
  
    return account;
  }

  async findAccountById(accountId) {
    const account = await AccountCollection.findById(accountId).select('name username');
    
    return account;
  }
}

const accountDatabase = new AccountDatabase();

export default accountDatabase;