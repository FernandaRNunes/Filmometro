import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Review } from "./Reviews.js";
import { MovieStatus } from "./MovieStatus.js";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MODERATOR = "moderator",
}

@Entity("usuarios")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 150 })
  name!: string;

  @Column("varchar", {
    length: 150,
    unique: true,
  })
  email!: string;

  @Column("varchar")
  password!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column({ type: "enum", enum: UserRole, default: UserRole.USER })
  role!: UserRole;

  @OneToMany(() => Review, (review) => review.user)
  reviews!: Review[];

  @OneToMany(() => MovieStatus, (movie_status) => movie_status.user)
  movie_status!: MovieStatus[];
}
