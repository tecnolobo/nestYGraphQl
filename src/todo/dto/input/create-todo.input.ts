import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput{

  @Field(
    ()=>String //de tipo string
    ,{description:"Que necesita hacer"}
  )
  description:string;

}