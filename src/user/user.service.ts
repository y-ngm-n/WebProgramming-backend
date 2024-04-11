import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const result = await this.userRepository.insert(createUserDto);
    return result.identifiers[0].id;
  }

  async findOne(id: string) {
    const result = await this.userRepository.findOneBy({ id });
    return result;
  }

  async updateInfo(id: string, createUserDto: CreateUserDto) {
    await this.userRepository.update({ id }, createUserDto);
  }

  async updateLectures() {}
  async updateFriends() {}
  async updateFriendsIn() {}
  async updateFriendsOut() {}

  async remove(id: string) {
    await this.userRepository.delete({ id });
  }
}
