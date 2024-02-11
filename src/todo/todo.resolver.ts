import { Resolver, Query } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {

  constructor(
    private readonly todoServices:TodoService
  ){

  }

  @Query(
    ()=>[Todo] //Arreglo de string
    ,{name:'todos'}
  )
  findAll(){
    return this.todoServices.findAll();
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
