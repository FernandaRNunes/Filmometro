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

  listAll = async () => {
    return await this.userRepository.find();
  };

  delete = async (id: number) => {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return await this.userRepository.delete(id);
  };

  update = async (id: number, data: Partial<User>) => {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    this.userRepository.merge(user, data);
    return await this.userRepository.save(user);
  };
}
