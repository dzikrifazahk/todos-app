import { Module } from '@nestjs/common';
import { TodosListService } from './todos-list.service';
import { TodosListController } from './todos-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosListEntity } from './entities/todos-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    TodosListEntity
  ])],
  controllers: [TodosListController],
  providers: [TodosListService],
})
export class TodosListModule {}
