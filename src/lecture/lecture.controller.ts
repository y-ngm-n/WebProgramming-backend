import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { Lecture } from './entities/lecture.entity';
import { UpdateLectureDto } from './dto/update-lecture.dto';

@Controller('lecture')
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}

  @Post("/")
  create(@Body() createLectureDto: CreateLectureDto): Promise<number> {
    return this.lectureService.create(createLectureDto);
  }

  @Get("/")
  findAll(): Promise<Lecture[]> {
    return this.lectureService.findAll();  
  }
  
  @Get("/:code")
  findOnd(@Param("code") code: string): Promise<Lecture> {
    return this.lectureService.findOne(code);
  }

  @Patch("/:code")
  update(@Param("code") code: string, @Body() updateLectureDto: UpdateLectureDto) {
    return this.lectureService.update(code, updateLectureDto);
  }

  @Delete("/:code")
  remove(@Param("code") code: string) {
    return this.lectureService.remove(code);
  }
}
