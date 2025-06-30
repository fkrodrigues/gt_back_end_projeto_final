const jwt = require('jsonwebtoken');

async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // Expected: "Bearer <token>"
  

  if (!token) {
    return res.status(401).json({ message: 'Token não foi fornecido!' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token expirado ou inválido!' });
    }

    req.user = decoded; // Attach user info to request
    next(); // Token is valid, continue
  });
}

module.exports = authenticateToken;