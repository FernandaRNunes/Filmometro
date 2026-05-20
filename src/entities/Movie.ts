import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Review } from "./Reviews.js";
import { MovieStatus } from "./MovieStatus.js";

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 150 })
  @IsNotEmpty({ message: "O título é um campo obrigatório." })
  title!: string;

  @Column("varchar", { length: 500 })
  @IsNotEmpty({ message: "A sinopse é um campo obrigatório." })
  synopsis!: string;

  @Column("varchar", { length: 50 })
  @IsNotEmpty({ message: "O gênero é obrigatório." })
  genre!: string;

  @Column("date")
  @IsNotEmpty({
    message: "A data de lançamento do filme é obrigatória.",
  })
  releaseDate!: Date;

  @Column("timestamp", {
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @Column("timestamp", {
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updated_at!: Date;

  @OneToMany(() => Review, (review) => review.movie)
  reviews!: Review[];

  @OneToMany(() => MovieStatus, (movie_status) => movie_status.movie)
  movie_status!: MovieStatus[];
}
