import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lecture } from './entities/lecture.entity';
import { Repository } from 'typeorm';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';

@Injectable()
export class LectureService {
  constructor(
    @InjectRepository(Lecture)
    private lectureRepository: Repository<Lecture>
  ) {}

  async create(createLectureDto: CreateLectureDto): Promise<number> {
    const result = await this.lectureRepository.insert(createLectureDto);
    return result.identifiers[0].idx;
  }

  async findAll(): Promise<Lecture[]> {
    const results = await this.lectureRepository.find();
    return results;
  }

  async findOne(code: string): Promise<Lecture> {
    const result = await this.lectureRepository.findOneBy({ code });
    return result;
  }

  async update(code: string, updateLectureDto: UpdateLectureDto) {
    await this.lectureRepository.update({ code }, updateLectureDto);
  }

  async remove(code: string) {
    await this.lectureRepository.delete({ code });
  }
}
