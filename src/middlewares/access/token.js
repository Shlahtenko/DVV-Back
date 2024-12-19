import { ERROR, response } from '#/utils/messages';

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' '[1]);
  if (!token) {
    response(res, ERROR.ACCESS_DENIED);
    return false;
  }
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      response(res, ERROR.INVALID_TOKEN);
      return;
    }
    req.user = decoded;
    next();
  });
};
