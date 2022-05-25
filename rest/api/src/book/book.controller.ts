import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ContentNegotationAll,
  OpenApiPaginationResponse,
} from 'src/common/decorators';
import { LoggedInGuard } from 'src/common/guards/logged-in.guard';
import { RoleGuard, Roles } from 'src/common/guards/role.guard';
import { ContentInterceptor } from 'src/common/interceptor/content.interceptor';
import { IPaginationResult } from 'src/common/interfaces';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book-actual.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Controller('book')
@ApiTags('Books')
@ContentNegotationAll()
@UseGuards(LoggedInGuard)
@ApiCookieAuth()
@UseGuards(RoleGuard)
@UseInterceptors(new ContentInterceptor())
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @Roles('clerk')
  @ApiOperation({ summary: 'Clerk only: create a new book' })
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @OpenApiPaginationResponse(Book)
  findAll(
    @Query('skip', ParseIntPipe) skip: number,
    @Query('take', ParseIntPipe) take: number,
  ): Promise<IPaginationResult<Book>> {
    return this.bookService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Clerk only: update a book' })
  @Roles('clerk')
  update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
