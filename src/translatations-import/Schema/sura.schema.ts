import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Chapter } from './chapter.schema';
export type SuraDocument = Sura & Document;
@Schema()
export class Sura {
  chapter:Chapter[]
}
export const SuraSchema = SchemaFactory.createForClass(Sura);
