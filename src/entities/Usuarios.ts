import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MODERATOR = "moderator",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 150 })
  name!: string;

  @Column("varchar", { length: 150 })
  email!: string;

  @Column("varchar")
  password!: string;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @Column({ type: "enum", enum: UserRole, default: UserRole.USER })
  role!: UserRole;
}
