import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LectureModule } from './lecture/lecture.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from 'typeorm.config';

@Module({
  imports: [UserModule, LectureModule, TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
