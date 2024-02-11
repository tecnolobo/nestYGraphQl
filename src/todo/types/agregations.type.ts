import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({description:'todo quick agregations'})
export class AgregationsType{

  @Field(()=>Int)
  total:number;

  @Field(()=>Int)
  pending:number;

  @Field(()=>Int)
  completed:number;

}