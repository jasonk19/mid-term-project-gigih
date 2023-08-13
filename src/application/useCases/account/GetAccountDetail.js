import accountDatabase from "../../../infrastructure/database/account/AccountDatabase.js";

export async function getAccountDetailUseCase(accountId) {
  const account = await accountDatabase.findAccountById(accountId);

  if (!account) {
    const error = new Error('Account does not exist');
    error.statusCode = 400;
    throw error;
  }

  return account
}