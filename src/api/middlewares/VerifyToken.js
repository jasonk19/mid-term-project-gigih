import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401)
    res.json({
      message: 'Not authorized'
    })
    return;
  }

  const bearer = authorization.split(' ');
  const bearerToken = bearer[1];
  
  try {
    const account = jwt.verify(bearerToken, process.env.PRIVATE_KEY);
  
    if (!account) {
      res.status(401);
      res.json({
        message: 'Not authorized'
      })
      return;
    }
  
    req.account = account;
  
    return next();
  } catch (error) {
    res.status(401);
    res.json({
      message: error.message
    })
  }
}