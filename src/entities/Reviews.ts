import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("number")
  user_id!: number;

  @Column("number")
  movie_id!: number;

  @Column("numeric")
  rating!: number;

  @Column("varchar")
  coment!: string;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;
}
