import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { IsArray, IsNumber, IsOptional } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsNumber()
  credit?: number;

  @IsOptional()
  @IsArray()
  lectures?: string[];

  @IsOptional()
  @IsArray()
  friends?: string[];
  
  @IsOptional()
  @IsArray()
  friendsIn?: string[];

  @IsOptional()
  @IsArray()
  friendsOut?: string[];
}