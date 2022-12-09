import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { DatabaseService } from "./database.service";
import { Translation } from "./schema/database.schema";
import {CreateKeywordTranslatorIdInput} from './dto/create-keyword-translator-id.input'

@Controller('search')
export class VerseSearchController {
  constructor(private readonly databaseService: DatabaseService) {}



//don't need at this moment 
  // // dynamic route
  // @Get()
  // async verseSearch(@Query() params) {
  //   //Destructure word from param
  //   console.log(params);
  //   return await this.databaseService.versesFindByWord(params);
  // }

  //post request for search keyword and translator id
  @Post()
  async verseSearchByWord(
    @Body() CreateKeywordTranslatorIdInput: CreateKeywordTranslatorIdInput) {
    const data = await this.databaseService.versesSearchByWord(CreateKeywordTranslatorIdInput);
    console.log(data)
    return data;
  }
}