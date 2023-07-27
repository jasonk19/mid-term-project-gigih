import { getAccountUseCase } from "../../../application/useCases/account/GetAccount";

export const loginAccountController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const token = await getAccountUseCase(username, password);
  
    res.status(200);
    res.json({
      message: 'Login successfull',
      token
    });
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode);
    res.json({
      message: error.message,
      error: true
    })
  }
}