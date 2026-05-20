import { validate } from "class-validator";
import { AppDataSource } from "../data-source.js";
import { Movie } from "../entities/Movie.js";

export class MovieService {
  private movieRepository = AppDataSource.getRepository(Movie);

  create = async (data: Partial<Movie>) => {
    const movie = this.movieRepository.create(data);
    return await this.movieRepository.save(movie);
  };

  listAll = async (): Promise<Movie[]> => {
    return await this.movieRepository.find();
  };

  delete = async (id: number) => {
    const movie = await this.movieRepository.findOneBy({ id });
    if (!movie) {
      throw new Error("Filme não encontrado");
    }
    return await this.movieRepository.delete(id);
  };

  update = async (id: number, data: Partial<Movie>) => {
    const movie = await this.movieRepository.findOneBy({ id });
    if (!movie) {
      throw new Error("Filme não encontrado");
    }
    this.movieRepository.merge(movie, data);
    return await this.movieRepository.save(movie);
  };
}
