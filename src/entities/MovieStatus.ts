import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movie_status")
export class MovieStatus {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("integer")
  user_id!: number;

  @Column("integer")
  movie_id!: number;

  @Column("varchar", { length: 30 })
  status!: string;

  @Column("timestamp", {
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;
}
