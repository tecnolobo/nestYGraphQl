import { InputType, Field } from '@nestjs/graphql';
import { IsString,IsNotEmpty, MaxLength,MinLength } from 'class-validator';

@InputType()
export class CreateTodoInput{

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @Field(
    ()=>String //de tipo string
    ,{description:"Que necesita hacer"}
  )
  description:string;

}