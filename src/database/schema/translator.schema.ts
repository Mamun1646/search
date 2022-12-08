import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';

export type TranslatorDocument = Translator & Document;
@ObjectType()
@Schema()
export class Translator {
  @Field(() => Number)
  @Prop({ type: Number })
  id: number;
  @Field(() => String)
  @Prop({ type: String })
  name: string;
  @Field(() => String)
  @Prop({ type: String })
  language: string;
}
export const TranslatorSchema = SchemaFactory.createForClass(Translator);