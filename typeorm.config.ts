import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
import { Lecture } from "src/lecture/entities/lecture.entity";
import { User } from "src/user/entities/user.entity";

dotenv.config();

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Lecture],
  synchronize: true,
  logging: true
};