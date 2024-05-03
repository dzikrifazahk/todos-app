import { Test, TestingModule } from '@nestjs/testing';
import { TodosListController } from './todos-list.controller';
import { TodosListService } from './todos-list.service';

describe('TodosListController', () => {
  let controller: TodosListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosListController],
      providers: [TodosListService],
    }).compile();

    controller = module.get<TodosListController>(TodosListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
