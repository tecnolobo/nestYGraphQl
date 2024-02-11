import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class TodoResolver {

  @Query(
    ()=>[String] //Arreglo de string
    ,{name:'todos'}
  )
  findAll(){
    return ['a','b','c','d']
  }

  findOne(){
    return {}
  }

  createTodo(){

  }

  updateTodo(){

  }

  removeTodo(){

  }

}
