import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Verses } from './verses.schema';
import { ObjectType, Field, Int } from '@nestjs/graphql';

export type QuranDocument = Quran & Document;
@Schema()
@ObjectType()
export class Quran {
  @Field(() => String)
  _id: mongoose.Types.ObjectId;
  @Field(() => Number)
  @Prop()
  id?: number;
  @Field(() => String)
  @Prop()
  name?: string;
  @Field(() => String)
  @Prop()
  transliteration: string;
  @Field(() => String)
  @Prop()
  translation: string;
  @Field(() => String)
  @Prop()
  type: string;
  @Field(() => String, { nullable: true })
  @Prop()
  total_verses?: number;
  @Field(() => [Verses])
  @Prop([{ type: raw({ ...Verses }) }])
  verses?: Verses[];
}
export const QuranSchema = SchemaFactory.createForClass(Quran);
