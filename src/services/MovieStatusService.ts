import { AppDataSource } from "../data-source.js";
import { MovieStatus } from "../entities/MovieStatus.js";
import { User } from "../entities/Usuarios.js";
import { Movie } from "../entities/Movie.js";

export class MovieStatusService {
  private movieStatusRepository = AppDataSource.getRepository(MovieStatus);
  private userRepository = AppDataSource.getRepository(User);
  private movieRepository = AppDataSource.getRepository(Movie);

  create = async (userId: number, movieId: number, status: string) => {
    const user = await this.userRepository.findOneBy({
      id: userId,
    });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const movie = await this.movieRepository.findOneBy({
      id: movieId,
    });
    if (!movie) {
      throw new Error("Filme não encontrado");
    }

    const data = { user, movie, status };

    const movieStatus = this.movieStatusRepository.create(data);
    return await this.movieStatusRepository.save(movieStatus);
  };

  listAll = async () => {
    return await this.movieStatusRepository.find({
      relations: ["user", "movie"],
    });
  };

  update = async (id: number, data: Partial<MovieStatus>) => {
    const movieStatus = await this.movieStatusRepository.findOneBy({ id });
    if (!movieStatus) {
      throw new Error("Status não encontrado");
    }
    if (data.status !== undefined) {
      movieStatus.status = data.status;
    }
    return await this.movieStatusRepository.save(movieStatus);
  };

  delete = async (id: number) => {
    const movieStatus = await this.movieStatusRepository.findOneBy({ id });
    if (!movieStatus) {
      throw new Error("Status não encontrado");
    }
    return await this.movieStatusRepository.delete(id);
  };
}
