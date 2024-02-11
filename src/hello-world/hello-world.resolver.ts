import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';
import { isNullableType } from 'graphql';

@Resolver()
export class HelloWorldResolver {

  //para llamar este recurso se llamara mediante el nombre name
  @Query(
    ()=>String,{
      name:"hello",
      description:"hola mundo es lo que retorna"

    }
  )
  helloworld():string{
    return "hola mundo"
  }

  @Query(
    ()=>Float,{
      name:"randomNombre",
      description:"trae un numero random"

    }
  )
  gerRandomNumber():number{
    return Math.random()*100;
  }


  @Query(
    ()=>Int,{
      name:"randomEntero",
      description:"Regresa un entero"
    }
  )
  //usamos el decorador @Args('to') y el nombre de argumento sera 'TO'
  getRandomFromZeroTo(
    @Args(
      'to',
      {
        type:()=>Int//Argumento de tipo entero
        ,nullable:true//no es obligatorio
      } 
    ) miargumento:number =6
  ):number{
    return Math.floor(Math.random()*miargumento)+1;
  }

}
