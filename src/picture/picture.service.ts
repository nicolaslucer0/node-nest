import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { Picture } from './entities/picture.entity';
import { Cache } from 'cache-manager';
@Injectable()
export class PictureService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectRepository(Picture)
    private readonly userRepository: Repository<Picture>,
  ) {}

  create(createPictureDto: CreatePictureDto) {
    return 'This action adds a new picture';
  }

  findAll() {
    return this.userRepository.find();
  }

  async findCachedPicture() {
    return await this.cacheManager.get('picture-uuid');
  }

  async findOne(uuid: string) {
    await this.cacheManager.set('picture-uuid', uuid);
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
