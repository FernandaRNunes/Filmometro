import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

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

  @Column("varchar", { length: 15 })
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
}
