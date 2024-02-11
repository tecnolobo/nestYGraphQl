import { Resolver, Query } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';

@Resolver()
export class TodoResolver {

  @Query(
    ()=>[Todo] //Arreglo de string
    ,{name:'todos'}
  )
  findAll(){
    return []
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
