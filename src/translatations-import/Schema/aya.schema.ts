import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
export type AyaDocument = Aya & Document;
@Schema()
export class Aya {
    index: string
    text:string
}
export const AyaSchema = SchemaFactory.createForClass(Aya);
