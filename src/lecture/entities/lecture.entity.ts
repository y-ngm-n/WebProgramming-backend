import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lecture {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ unique: true })
  code: string;

  @Column()
  name: string;

  @Column()
  credit: number;

  @Column()
  professor: string;

  @Column()
  datetime: string;

  @Column()
  content: string;
};