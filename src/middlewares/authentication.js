import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // formato "Bearer <token>"

  if (!token) {
    return res.status(403).json({ error: "Token requerido" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido o expirado" });
    }
    req.user = user; // guardamos la info decodificada
    next();
  });
}
