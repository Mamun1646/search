import { Prop } from '@nestjs/mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType()
export class Verses {
  @Field(() => String)
  @Prop({ type: String })
  id?: string;
  @Field(() => String)
  @Prop({ type: String })
  text?: string;
  @Field(() => String)
  @Prop({ type: String })
  translation?: string;
}
