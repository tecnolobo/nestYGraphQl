import { Resolver, Query, Args, Int, ArgsType, Mutation } from '@nestjs/graphql';
import { CreateTodoInput } from './dto/input/create-todo.input';
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

  @Query(
    ()=>Todo //Arreglo de string
    ,{name:'todo'}
  )  
  findOne(@Args('id',{type:()=>Int}) id:number){
   return this.todoServices.findOne(id);
  }

  @Mutation(()=>Todo,{name:"createTodo"})
  createTodo(
    @Args('createTodoInput') createTodoInput:CreateTodoInput
  ){
   
    return this.todoServices.create(createTodoInput);
  }

  updateTodo(){

  }

  removeTodo(){

  }

}
