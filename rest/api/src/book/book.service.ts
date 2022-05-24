import { Injectable } from '@nestjs/common';
import { IPaginationResult } from 'src/common/interfaces';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book-actual.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(private readonly prismaService: PrismaService) {}

  private resource = this.prismaService.book;

  async create(dto: CreateBookDto) {
    return await this.resource.create({
      data: dto,
    });
  }

  async findAll(skip: number, take: number): Promise<IPaginationResult<Book>> {
    const count = await this.resource.count();
    const items = await this.resource.findMany({ skip, take });

    return { count, items };
  }

  async findOne(id: string) {
    return await this.resource.findUnique({ where: { id } });
  }

  async update(id: string, updateDto: UpdateBookDto) {
    return await this.resource.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: string) {
    return await this.resource.delete({ where: { id } });
  }
}
