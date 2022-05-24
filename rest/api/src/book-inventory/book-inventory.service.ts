import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateBookInventoryRelationDto } from './dto/create-book-inventory-actual-dto';
import { CreateBookInventoryDto } from './dto/create-book-inventory.dto';
import { UpdateBookInventoryDto } from './dto/update-book-inventory.dto';

@Injectable()
export class BookInventoryService {
  constructor(private readonly prismaService: PrismaService) {}

  private resource = this.prismaService.bookInventory;

  async create(dto: CreateBookInventoryRelationDto) {
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

  async update(id: string, updateDto: UpdateBookInventoryDto) {
    return await this.resource.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: string) {
    return await this.resource.delete({ where: { id } });
  }
}
