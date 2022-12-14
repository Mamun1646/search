import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteResolver } from './note.resolver';
import { NoteService } from './note.service';
import { Note, NoteSchema } from './schema/note.schema';
import { NoteController } from './note.controller';
@Module({
  imports: [
  
  MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
  ],
  controllers: [NoteController],
  providers: [NoteService, NoteResolver],
})
export class NoteModule {}
