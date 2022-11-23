import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
export type NoteDocument = Note & Document;
@Schema()
@ObjectType()
export class Note {
  @Field(() => String)
  _id: mongoose.Types.ObjectId;
  @Prop()
  @Field(() => String, { nullable: true })
  username?: string;
  @Prop()
  @Field(() => Number, { nullable: true })
  surah?: number;
  @Prop()
  @Field(() => Number, { nullable: true })
  verse?: number;
  @Prop()
  @Field(() => String, { nullable: true })
  note?: string;
  @Prop()
  @Field(() => Number, { nullable: true })
  day?: number;
  @Prop()
  @Field(() => Number, { nullable: true })
  month?: number;
  @Prop()
  @Field(() => String, { nullable: true })
  date?: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note)