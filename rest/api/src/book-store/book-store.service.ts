import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PubSubEngine } from 'graphql-subscriptions';
import { ISessionUser } from 'src/common/interfaces';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateBookStoreDto } from './dto/create-book-store.dto';
import { UpdateBookStoreDto } from './dto/update-book-store.dto';

@Injectable()
export class BookStoreService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject('PUB_SUB') private pubSub: PubSubEngine,
  ) {}

  private resource = this.prismaService.bookStore;

  async create(dto: CreateBookStoreDto) {
    return await this.resource.create({
      data: dto,
    });
  }

  async findAll() {
    return await this.resource.findMany({ orderBy: { name: 'asc' } });
  }

  async findOne(id: string) {
    return await this.resource.findUnique({
      where: { id },
      include: {
        bookInventory: {
          include: { book: true },
          orderBy: { createdAt: 'asc' },
        },
        booksSold: {
          include: { book: true },
          orderBy: { createdAt: 'desc' },
        },
      },
    });
  }

  async sellOne(
    bookStoreId: string,
    inventoryId: string,
    sessionUser: ISessionUser,
  ) {
    const inventory = await this.prismaService.bookInventory.findUnique({
      where: { id: inventoryId },
    });

    if (!inventory) throw new NotFoundException('Inventory not found');

    if (inventory.count <= 0)
      throw new BadRequestException('Not enough Inventory!');

    const bookSold = await this.prismaService.bookInventory.update({
      where: { id: inventoryId },
      data: {
        count: inventory.count - 1,
      },
    });

    const store = await this.prismaService.bookStore.update({
      where: { id: bookStoreId },

      data: {
        totalProfit: {
          increment: inventory.price,
        },

        booksSold: {
          create: {
            profit: inventory.price,
            bookId: inventory.bookId,
            soldBy: sessionUser.firstname + sessionUser.lastname,
          },
        },
      },
    });

    this.pubSub.publish('bookSold', { bookSold });

    return store;
  }

  async update(id: string, updateDto: UpdateBookStoreDto) {
    return await this.resource.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: string) {
    return await this.resource.delete({ where: { id } });
  }
}
