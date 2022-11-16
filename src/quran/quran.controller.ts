import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuranService } from './quran.service';


@Controller('quran')
export class QuranController {
  constructor(private readonly quranService: QuranService) {}

 

  @Get()
  findAll() {
    return this.quranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quranService.findOne(+id);
  }

 

}
