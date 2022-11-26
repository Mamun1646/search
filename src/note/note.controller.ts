import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteInput } from './dto/create-note.input';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  findNote() {
    return this.noteService.findAll();
  }
  //   @Get(":day")
  //   filter(@Param() param) {
  //       console.log(param.day)
  //       return this.noteService.filter(param.day);
  // }
  @Post()
  createNote(@Body() createNoteInput: CreateNoteInput) {
    return this.noteService.create(createNoteInput);
  }
}
