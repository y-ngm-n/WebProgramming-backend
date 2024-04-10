import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lecture {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  professor: string;

  @Column()
  datetime: string;

  @Column()
  content: string;
};