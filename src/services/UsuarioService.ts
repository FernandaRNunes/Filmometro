import { User } from "../entities/Usuarios.js";
import { AppDataSource } from "../data-source.js";
import bcrypt from "bcryptjs";

export class UsuarioService {
  private userRepository = AppDataSource.getRepository(User);

  create = async (data: Partial<User>) => {
    if (!data.email) {
      throw new Error("E-mail é obrigatório");
    }
    if (!data.password) {
      throw new Error("Senha é obrigatória");
    }

    const exists = await this.userRepository.findOneBy({
      email: data.email,
    });
    if (exists) {
      throw new Error("E-mail já cadastrado");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  };

  listAll = async (): Promise<User[]> => {
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
    if (data.password) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;
    }
    this.userRepository.merge(user, data);
    return await this.userRepository.save(user);
  };
}
