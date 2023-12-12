import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
  @Field((type) => Int)
  id: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  startDate: string;

  @Field({ nullable: true })
  endDate: string;
}