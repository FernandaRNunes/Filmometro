import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source.js";
import { User } from "../entities/Usuarios.js";

export class AuthService {
  private userRepository = AppDataSource.getRepository(User);

  login = async (email: string, password: string) => {
    const user = await this.userRepository.findOne({
      where: { email },
      select: ["id", "password", "role"],
    });
    if (!user) {
      throw new Error("E-mail ou senha inválidos");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("E-mail ou senha inválidos");
    }
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET ?? "secret",
      {
        expiresIn: "1d",
      }
    );
    return {
      token,
    };
  };
}
