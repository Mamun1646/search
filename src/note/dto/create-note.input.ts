import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNoteInput {
  @Field(() => String, { nullable: true })
  username?: string;
  @Field(() => Number, { nullable: true })
  surah?: number;
  @Field(() => Number, { nullable: true })
  verse?: number;
  @Field(() => String, { nullable: true })
  note?: string;
  @Field(() => Number, { nullable: true })
  day?: number;
  @Field(() => Number, { nullable: true })
  month?: number;
  @Field(() => String, { nullable: true })
  date?:string;
}
