
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
export type NoteDocument = Note & Document;
@Schema()

export class Note {
 
  @Prop()
 
  username?: string;
  @Prop()

  surah?: number;
  @Prop()

  verse?: number;
  @Prop()
  
  note?: string;
  @Prop()

  day?: number;
  @Prop()
 
  month?: number;
  @Prop()

  date?: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note)