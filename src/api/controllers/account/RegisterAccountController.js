import { registerAccountUseCase } from "../../../application/useCases/account/RegisterAccount.js";

export const registerAccountController = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const token = await registerAccountUseCase({ name, username, password });
  
    res.status(200);
    res.json({
      message: 'Account created',
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