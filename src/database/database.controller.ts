import { Controller, Get, Injectable } from '@nestjs/common';

import { DatabaseService } from './database.service';


@Injectable()
@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}
  @Get('translation-import')
  async findAll() {
   return  await this.databaseService.findSurah( );
    
  }
}
