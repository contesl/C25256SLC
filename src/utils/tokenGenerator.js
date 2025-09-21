import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

export function generateToken(user) {
  const expiration = "1h"; // tiempo de vida del token

  const token = jwt.sign(
    { id: user.id, email: user.email }, // payload
    SECRET_KEY,
    { expiresIn: expiration }
  );

  return token;
}
