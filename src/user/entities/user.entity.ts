import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  id: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  university: string;

  @Column()
  department: string;

  @Column()
  sid: number;

  // @Column()
  // image: number;

  @Column({ default: 0 })
  credit: number;

  // @Column({ array: true })
  // lectures: number[];
  @Column({ default: "[]" })
  lectures: string;

  // @Column({ array: true })
  // friends: number[];
  @Column({ default: "[]" })
  friends: string;

  // @Column({ array: true })
  // friendsIn: number[];
  @Column({ default: "[]" })
  friendsIn: string;

  // @Column({ array: true })
  // friendsOut: number[];
  @Column({ default: "[]" })
  friendsOut: string;
};