import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Chapter } from './chapter.schema';
import { Sura } from './sura.schema';
export type Quran2Document = Quran2 & Document;
@Schema()
export class Quran2 {
  chapter: Sura[];
}
export const Quran2Schema = SchemaFactory.createForClass(Quran2);
