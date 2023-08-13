import { getAccountDetailUseCase } from "../../../application/useCases/account/GetAccountDetail.js";

export const getAccountDetailController = async (req, res) => {
  try {
    const accountId = req.account._id;

    const account = await getAccountDetailUseCase(accountId)
  
    res.status(200);
    res.json(account);
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode);
    res.json({
      message: error.message,
      error: true
    })
  }
}