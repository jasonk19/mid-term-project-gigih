import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
  console.log(req.headers);

  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401)
    res.json({
      message: 'Not authorized'
    })
  }

  const bearer = authorization.split(' ');
  const bearerToken = bearer[1];
  
  const account = jwt.verify(bearerToken);

  if (!account) {
    res.status(401);
    res.json({
      message: 'Not authorized'
    })
  }

  req.account = account;

  return next();
}