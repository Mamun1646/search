import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Aya } from './aya.schema';
export type ChapterDocument = Chapter & Document;
@Schema()
export class Chapter {
  index: string;
    name: string;
    aya:Aya[]
}
export const ChapterSchema = SchemaFactory.createForClass(Chapter);
