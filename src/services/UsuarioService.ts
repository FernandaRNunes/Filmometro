import { validate } from "class-validator";
import { User, UserRole } from "../entities/Usuarios.js";
import { AppDataSource } from "../data-source.js";

export class UsuarioService {
  private userRepository = AppDataSource.getRepository(User);

  create = async (
    name: string,
    email: string,
    password: string,
    role: UserRole
  ) => {
    const data = { name, email, password, role };
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  };
}
