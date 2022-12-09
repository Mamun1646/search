import { Controller, Get, Param } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { Translation } from './schema/database.schema';


@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) { }
  

  @Get('translation-import')
  async translationImport() {
    const translator = {
      id: 2,
      name: 'Ar Berry',
      language: 'en',
    };
    return await this.databaseService.insertTranslations(translator);
  }


}
