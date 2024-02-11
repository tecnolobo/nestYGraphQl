import { Resolver, Query, Args, Int, ArgsType, Mutation } from '@nestjs/graphql';
import { CreateTodoInput,UpdateTodoInput } from './dto/input';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver(()=>Todo) //Se le envia como parametro que tipo de dato va a trabajar
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

  @Mutation(()=>Todo,{name:"updateTodo"})
  updateTodo(
    @Args('updateTodoInput') updateTodoInput:UpdateTodoInput
  ){
    
    return this.todoServices.update(updateTodoInput);
  }

  @Mutation(()=>Boolean)
  removeTodo(
    @Args('id',{type:()=>Int}) id:number
  ){
    return this.todoServices.delete(id);
  }

}
