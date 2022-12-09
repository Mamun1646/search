import { Test, TestingModule } from '@nestjs/testing';
import { TranslatationsImportService } from './translatations-import.service';

describe('TranslatationsImportService', () => {
  let service: TranslatationsImportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranslatationsImportService],
    }).compile();

    service = module.get<TranslatationsImportService>(TranslatationsImportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
