import { generateToken } from "../utils/tokenGenerator.js";

export function login(req, res) {
  const { email, password } = req.body;

  // Usuario ficticio (simulación de validación)
  const fakeUser = {
    id: 1,
    email: "test@test.com",
    password: "1234"
  };

  if (email === fakeUser.email && password === fakeUser.password) {
    const token = generateToken(fakeUser);
    return res.json({ token });
  }

  return res.status(401).json({ error: "Credenciales inválidas" });
}
