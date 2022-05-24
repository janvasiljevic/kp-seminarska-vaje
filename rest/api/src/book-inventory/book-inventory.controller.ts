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
import { BookInventoryService } from './book-inventory.service';
import { CreateBookInventoryRelationDto } from './dto/create-book-inventory-actual-dto';
import { UpdateBookInventoryDto } from './dto/update-book-inventory.dto';
import { BookInventory } from './entities/book-inventory.entity';

@Controller('book-inventory')
@ApiTags('Book inventories')
@ContentNegotationAll()
@UseGuards(LoggedInGuard)
@ApiCookieAuth()
@UseGuards(RoleGuard)
@UseInterceptors(new ContentInterceptor())
export class BookInventoryController {
  constructor(private readonly bookInventoryService: BookInventoryService) {}

  @Post()
  create(
    @Body() createBookInventoryDto: CreateBookInventoryRelationDto,
  ): Promise<BookInventory> {
    return this.bookInventoryService.create(createBookInventoryDto);
  }

  @Get()
  findAll(): Promise<BookInventory[]> {
    return this.bookInventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BookInventory> {
    return this.bookInventoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookInventoryDto: UpdateBookInventoryDto,
  ): Promise<BookInventory> {
    return this.bookInventoryService.update(id, updateBookInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookInventoryService.remove(id);
  }
}
