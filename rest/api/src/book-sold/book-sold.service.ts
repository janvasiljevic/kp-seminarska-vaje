import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateBookSoldRelationsDto } from './dto/create-book-sold-relations';
import { CreateBookSoldDto } from './dto/create-book-sold.dto';
import { UpdateBookSoldDto } from './dto/update-book-sold.dto';

@Injectable()
export class BookSoldService {
  constructor(private readonly prismaService: PrismaService) {}

  private resource = this.prismaService.bookSold;

  async create(dto: CreateBookSoldRelationsDto) {
    return await this.resource.create({
      data: dto,
    });
  }

  async findAll() {
    return await this.resource.findMany({});
  }

  async findOne(id: string) {
    return await this.resource.findUnique({ where: { id } });
  }

  async update(id: string, updateDto: UpdateBookSoldDto) {
    return await this.resource.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: string) {
    return await this.resource.delete({ where: { id } });
  }
}
