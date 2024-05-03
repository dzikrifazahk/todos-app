import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosListService } from './todos-list.service';
import { CreateTodosListDto } from './dto/create-todos-list.dto';
import { UpdateTodosListStatusDto } from './dto/update-todos-list.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseDto } from 'src/common/base.dto';

@ApiTags('Todo List') //tambahkan api tags untuk swagger
@Controller('todos-list')
export class TodosListController {
  constructor(private readonly todosListService: TodosListService) {}

  @Post('create') //optional boleh ditambahkan create untuk url nya
  @ApiOperation({ //untuk deskripsi pada swagger
    summary: 'Ini Api Untuk Membuat Data Todo',
    description: 'Gunakan Api ini untuk membuat data todo anda',
  })
  async create(@Body() createTodosListDto: CreateTodosListDto) {
    const data = await this.todosListService.create(createTodosListDto);

    return new BaseDto('Berhasil membuat data', data);
  }

  @Get('/')
  @ApiOperation({
    summary: 'Ini Api Untuk Mengambil Semua Data Todo',
    description: 'Gunakan Api ini untuk mengambil semua data todo anda',
  })
  async findAll() {
    const data = await this.todosListService.findAll();

    return new BaseDto('Berhasil Mengambil Semua Data', data);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Ini Api Untuk Mengambil Data Todo Berdasarkan Id',
    description: 'Gunakan Api ini untuk mengambil data todo anda berdasarkan id',
  })
  async findOne(@Param('id') id: string) {
    const data = await this.todosListService.findOne(id);

    return new BaseDto('Berhasil Mengambil Satu Data', data);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Ini Api Untuk Mengubah Status Data Todo',
    description: 'Gunakan Api ini untuk mengubah status data todo anda',
  })
  async update(@Param('id') id: string, @Body() updateTodosListDto: UpdateTodosListStatusDto) {
    const updateData = await this.todosListService.updateStatus(id, updateTodosListDto);
    
    return new BaseDto(`Berhasil Mengubah Status Menjadi ${updateData.status}`, updateData);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Ini Api Untuk Menghapus Data Todo',
    description: 'Gunakan Api ini untuk menghapus data todo anda',
  })
  async remove(@Param('id') id: string) {
    const removeData = await this.todosListService.remove(id);
    
    return new BaseDto('Berhasil Menghapus Data', removeData);
  }
}
