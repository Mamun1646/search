import { Injectable, Param } from '@nestjs/common';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { Note, NoteDocument } from './schema/note.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NoteModule } from './note.module';


@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}
  async create(createNoteInput: CreateNoteInput) {
    return this.noteModel.create(createNoteInput);
  }

  findAll() {
    return this.noteModel.find();
  }
  async Search_Note(data: string): Promise<Note[]> {
    const regex = new RegExp(data, 'i');

    return await this.noteModel.find({
      note: { $regex: regex },
    });
  }
  async filterNote(day: Number): Promise<any> {
    return this.noteModel.find({ day: { $gte: day } });
  }
  filter(@Param() param) {
    const d = new Date();
    console.log(d);
    
    const day = d.getDate() - param;
    

    return this.noteModel.find({ day: { $gt: day } });
  }
}
