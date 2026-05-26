import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./Usuarios.js";
import { Movie } from "./Movie.js";

export enum MovieStatusType {
  WATCHED = "assistido",
  WATCHLIST = "para_assistir",
}

@Entity("movie_status")
export class MovieStatus {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.movie_status, { onDelete: "CASCADE" })
  user!: User;

  @ManyToOne(() => Movie, (movie) => movie.movie_status, {
    onDelete: "CASCADE",
  })
  movie!: Movie;

  @Column({
  type: "enum",
  enum: MovieStatusType,
  })
  status!: MovieStatusType;

  @Column("timestamp", {
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;
}
