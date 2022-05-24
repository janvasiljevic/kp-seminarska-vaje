import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ContentNegotationAll } from 'src/common/decorators';
import { SessionUser } from 'src/common/decorators/session-user.decorator';
import { LoggedInGuard } from 'src/common/guards/logged-in.guard';
import { RoleGuard } from 'src/common/guards/role.guard';
import { ContentInterceptor } from 'src/common/interceptor/content.interceptor';
import { ISessionUser } from 'src/common/interfaces';
import { BookStoreService } from './book-store.service';
import { CreateBookStoreDto } from './dto/create-book-store.dto';
import { UpdateBookStoreDto } from './dto/update-book-store.dto';
import { BookStore } from './entities/book-store.entity';

@Controller('book-store')
@ApiTags('Book stores')
@ContentNegotationAll()
@UseGuards(LoggedInGuard)
@ApiCookieAuth()
@UseGuards(RoleGuard)
@UseInterceptors(new ContentInterceptor())
export class BookStoreController {
  constructor(private readonly bookStoreService: BookStoreService) {}

  @Post()
  create(@Body() createBookStoreDto: CreateBookStoreDto): Promise<BookStore> {
    return this.bookStoreService.create(createBookStoreDto);
  }

  @Get()
  findAll(): Promise<BookStore[]> {
    return this.bookStoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BookStore> {
    return this.bookStoreService.findOne(id);
  }

  @Patch(':id/sell/:inventoryId')
  @ApiOperation({ description: 'Sell a book', summary: 'Sell a book' })
  sellOne(
    @Param('id') bookStoreId: string,
    @Param('inventoryId') inventoryId: string,
    @SessionUser() sessionUser: ISessionUser,
  ) {
    return this.bookStoreService.sellOne(bookStoreId, inventoryId, sessionUser);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookStoreDto: UpdateBookStoreDto,
  ): Promise<BookStore> {
    return this.bookStoreService.update(id, updateBookStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookStoreService.remove(id);
  }
}
