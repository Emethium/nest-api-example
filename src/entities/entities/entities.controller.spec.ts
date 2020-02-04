import { Test, TestingModule } from '@nestjs/testing';
import { EntitiesController } from './entities.controller';

describe('Entities Controller', () => {
  let controller: EntitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntitiesController],
    }).compile();

    controller = module.get<EntitiesController>(EntitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
