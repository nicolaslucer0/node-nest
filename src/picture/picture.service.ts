import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { Picture } from './entities/picture.entity';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture)
    private readonly userRepository: Repository<Picture>,
  ) {}

  create(createPictureDto: CreatePictureDto) {
    return 'This action adds a new picture';
  }

  findAll() {
    return `This action returns all picture`;
  }

  findOne(uuid: string) {
    return this.userRepository.findOne({
      where: {
        uuid: uuid,
      },
    });
  }

  update(id: number, updatePictureDto: UpdatePictureDto) {
    return `This action updates a #${id} picture`;
  }

  remove(id: number) {
    return `This action removes a #${id} picture`;
  }
}
