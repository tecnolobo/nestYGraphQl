import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, MaxLength, MinLength, IsBoolean, IsInt, Min, IsOptional } from 'class-validator';

@InputType()
export class UpdateTodoInput{

  @IsInt()
  @Min(1)
  @Field(
    ()=>Int //de tipo string
    ,{description:"Id del todo"}
  )
  id?:number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @IsOptional()
  @Field(
    ()=>String //de tipo string
    ,{
      description:"Que necesita hacer"
      ,nullable:true //Por defecto puede venir vacio
    }
  )
  description?:string;


  @IsBoolean()
  @IsOptional()
  @Field(
    ()=>Boolean //de tipo string
    ,{
      description:"Esta activo o no?"
      ,nullable:true //Por defecto puede venir vacio
    }
  )
  done?:boolean;  

}