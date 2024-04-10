import { Controller } from '@nestjs/common';
import { LectureService } from './lecture.service';

@Controller('lecture')
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}
}
