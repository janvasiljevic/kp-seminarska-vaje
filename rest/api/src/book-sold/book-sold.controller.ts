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
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';
import { ContentNegotationAll } from 'src/common/decorators';
import { LoggedInGuard } from 'src/common/guards/logged-in.guard';
import { RoleGuard } from 'src/common/guards/role.guard';
import { ContentInterceptor } from 'src/common/interceptor/content.interceptor';
import { BookSoldService } from './book-sold.service';
import { CreateBookSoldRelationsDto } from './dto/create-book-sold-relations';
import { UpdateBookSoldDto } from './dto/update-book-sold.dto';
import { BookSold } from './entities/book-sold.entity';

@Controller('book-sold')
@ApiTags('Books sold')
@ContentNegotationAll()
@UseGuards(LoggedInGuard)
@ApiCookieAuth()
@UseGuards(RoleGuard)
@UseInterceptors(new ContentInterceptor())
export class BookSoldController {
  constructor(private readonly bookSoldService: BookSoldService) {}

  @Post()
  create(
    @Body() createBookSoldDto: CreateBookSoldRelationsDto,
  ): Promise<BookSold> {
    return this.bookSoldService.create(createBookSoldDto);
  }

  @Get()
  findAll(): Promise<BookSold[]> {
    return this.bookSoldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BookSold> {
    return this.bookSoldService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookSoldDto: UpdateBookSoldDto,
  ): Promise<BookSold> {
    return this.bookSoldService.update(id, updateBookSoldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookSoldService.remove(id);
  }
}
