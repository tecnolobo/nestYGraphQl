import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() 
export class Todo{

  //para decirle a graphql que tipo de dato es
  @Field(()=> Int)
  id:number;

  @Field(()=> String)
  descrtion:string;

  @Field(()=> Boolean)
  done:boolean = false;

}