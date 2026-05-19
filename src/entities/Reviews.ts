import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./Usuarios.js";
import { Movie } from "./Movie.js";

@Entity("reviews")
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.reviews, { onDelete: "CASCADE" })
  user!: User;

  @ManyToOne(() => Movie, (movie) => movie.reviews, { onDelete: "CASCADE" })
  movie!: Movie;

  @Column("numeric")
  rating!: number;

  @Column("varchar")
  comment!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
