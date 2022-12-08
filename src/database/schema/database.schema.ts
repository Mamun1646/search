import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Translator } from './translator.schema';
import { Verse } from './verses.schema';

export type TranslationDocument = Translation & Document;
@Schema()
@ObjectType()
export class Translation {
  @Field(() => String)
  _id: mongoose.Types.ObjectId;
  @Field(() => Translator)
  @Prop()
  translator?: Translator;
  @Field(() => Number)
  @Prop()
  surah_id: Number
  @Field(() => String)
  @Prop()
  surah_name: String
  @Field(() => Verse)
  @Prop()
  verse?: Verse;
  @Field(() => String)
  @Prop()
  translated_text: string;
}
export const TranslationSchema = SchemaFactory.createForClass(Translation);
