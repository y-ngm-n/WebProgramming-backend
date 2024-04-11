import { IsNumber, IsString } from "class-validator";

export class CreateLectureDto {
  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsNumber()
  credit: number;

  @IsString()
  professor: string;

  @IsString()
  datetime: string;

  @IsString()
  content: string;
}