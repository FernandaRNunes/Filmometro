import { AppDataSource } from "../data-source.js";
import { Review } from "../entities/Reviews.js";
import { User } from "../entities/Usuarios.js";
import { Movie } from "../entities/Movie.js";
import { MovieStatus } from "../entities/MovieStatus.js";

export class ReviewService {
  private reviewRepository = AppDataSource.getRepository(Review);
  private userRepository = AppDataSource.getRepository(User);
  private movieRepository = AppDataSource.getRepository(Movie);
  private movieStatusRepository = AppDataSource.getRepository(MovieStatus);

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
    if (rating < 0 || rating > 10) {
      throw new Error("A nota deve estar entre 0 e 10");
    }
    const existingReview = await this.reviewRepository.findOne({
      where: {
        user: { id: userId },
        movie: { id: movieId },
      },
      relations: ["user", "movie"],
    });
    if (existingReview) {
      throw new Error("Usuário já avaliou este filme");
    }
    const watchedMovie = await this.movieStatusRepository.findOne({
      where: {
        user: { id: userId },
        movie: { id: movieId },
        status: "Assistido",
      },
      relations: ["user", "movie"],
    });
    if (!watchedMovie) {
      throw new Error(
        "O usuário só pode avaliar filmes marcados como Assistido"
      );
    }
    const today = new Date();
    if (movie.releaseDate > today) {
      throw new Error("Filmes ainda não lançados não podem receber avaliações");
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

  update = async (id: number, userId: number, data: Partial<Review>) => {
    const review = await this.reviewRepository.findOne({
      where: {
        id,
        user: {
          id: userId,
        },
      },
      relations: ["user"],
    });
    if (!review) {
      throw new Error("Avaliação não encontrada");
    }
    if (data.rating !== undefined) {
      if (data.rating < 0 || data.rating > 10) {
        throw new Error("A nota deve estar entre 0 e 10");
      }
      review.rating = data.rating;
    }
    if (data.comment !== undefined) {
      review.comment = data.comment;
    }
    return await this.reviewRepository.save(review);
  };

  delete = async (id: number, userId: number) => {
    const review = await this.reviewRepository.findOne({
      where: { id, user: { id: userId } },
      relations: ["user"],
    });
    if (!review) {
      throw new Error("Avaliação não encontrada");
    }
    return await this.reviewRepository.delete(id);
  };
}
