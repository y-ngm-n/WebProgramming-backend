import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
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

  @Column()
  credit: number;

  // @Column({ array: true })
  // lectures: number[];
  @Column()
  lectures: string;

  // @Column({ array: true })
  // friends: number[];
  @Column()
  friends: string;

  // @Column({ array: true })
  // friendsIn: number[];
  @Column()
  friendsIn: string;

  // @Column({ array: true })
  // friendsOut: number[];
  @Column()
  friendsOut: string;
};