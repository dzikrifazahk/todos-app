import { Injectable } from '@nestjs/common';
import { CreateTodosListDto } from './dto/create-todos-list.dto';
import { UpdateTodosListStatusDto } from './dto/update-todos-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodosListEntity } from './entities/todos-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosListService {
  constructor(
    @InjectRepository(TodosListEntity)
    private readonly todosListRepository: Repository<TodosListEntity>,
  ) {}

  async create(dto: CreateTodosListDto) {
    const createData = this.todosListRepository.create({
      todo: dto.todo,
      description: dto.description,
    })
    
    await this.todosListRepository.save(createData);

    return createData;
  }

  async findAll(keyOrder?: 'ASC' | 'DESC') {
    let getAllData;

    if (keyOrder) {
        getAllData = await this.todosListRepository.find({
            order: {
                createdAt: keyOrder
            }
        });
    } else {
        getAllData = await this.todosListRepository.find();
    }

    if (!getAllData) {
        throw new Error('Error Get All Data With Sort');
    }

    return getAllData;
}


  async findOne(id: string) {
    
    // mencari data dengan findOne
    const findData = await this.todosListRepository.findOne({
      where: {
        id: id
      }
    })

    if(!findData){
      throw new Error('Data Not Found');
    }

    return findData;
  }

  async updateStatus(id: string, dto: UpdateTodosListStatusDto) {
    // mencari data dengan findOne
    const findData = await this.todosListRepository.findOne({
      where: {
        id: id
      }
    })

    if(!findData){
      throw new Error('Data Not Found');
    }

    // update status
    findData.status = dto.status;

    // save data
    await this.todosListRepository.save(findData);

    return findData;
  }

  async remove(id: string) {
    
    // ngambil data dengan menggunakan service di dalam file ini
    const findData = await this.findOne(id);

    const removeIt = await this.todosListRepository.remove(findData);

    return removeIt;
  }

  async sortBy(key: number){
  }
}
