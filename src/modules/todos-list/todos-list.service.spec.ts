import { Test, TestingModule } from '@nestjs/testing';
import { TodosListService } from './todos-list.service';

describe('TodosListService', () => {
  let service: TodosListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosListService],
    }).compile();

    service = module.get<TodosListService>(TodosListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
