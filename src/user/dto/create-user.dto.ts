import { IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  id: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  university: string;

  @IsString()
  department: string;

  @IsString()
  sid: number;
}