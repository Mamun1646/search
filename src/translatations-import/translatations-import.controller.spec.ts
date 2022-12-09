import { Test, TestingModule } from '@nestjs/testing';
import { TranslatationsImportController } from './translatations-import.controller';

describe('TranslatationsImportController', () => {
  let controller: TranslatationsImportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TranslatationsImportController],
    }).compile();

    controller = module.get<TranslatationsImportController>(TranslatationsImportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
