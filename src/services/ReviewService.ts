import { AppDataSource } from "../data-source.js";
import { Review } from "../entities/Reviews.js";
import { User } from "../entities/Usuarios.js";
import { Movie } from "../entities/Movie.js";

export class ReviewService {
  private reviewRepository = AppDataSource.getRepository(Review);
  private userRepository = AppDataSource.getRepository(User);
  private movieRepository = AppDataSource.getRepository(Movie);

  create = async (
    userId: number,
    movieId: number,
    rating: number,
    comment: string
  ) => {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    const movie = await this.movieRepository.findOneBy({ id: movieId });
    if (!movie) {
      throw new Error("Filme não encontrado");
    }
    const data = {
      user,
      movie,
      rating,
      comment,
    };
    const review = this.reviewRepository.create(data);
    return await this.reviewRepository.save(review);
  };

  listAll = async () => {
    return await this.reviewRepository.find({
      relations: ["user", "movie"],
    });
  };

  update = async (id: number, data: Partial<Review>) => {
    const review = await this.reviewRepository.findOneBy({ id });
    if (!review) {
      throw new Error("Avaliação não encontrada");
    }
    this.reviewRepository.merge(review, data);
    return await this.reviewRepository.save(review);
  };

  delete = async (id: number) => {
    const review = await this.reviewRepository.findOneBy({ id });
    if (!review) {
      throw new Error("Avaliação não encontrada");
    }
    return await this.reviewRepository.delete(id);
  };
}
