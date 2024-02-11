import { Resolver, Query, Args, Int, ArgsType, Mutation } from '@nestjs/graphql';
import { CreateTodoInput,UpdateTodoInput } from './dto/input';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { StatusArgs } from './dto/arg/status.args';
import { AgregationsType } from './types/agregations.type';

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
  findAll(
    @Args() startusAr:StatusArgs
  ){
    return this.todoServices.findAll(startusAr);
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


  @Query(()=>Int,{name:"totalTodos"})
  totalTodos():number{
    return this.todoServices.getTotaltodos();
  }

  @Query(()=>Int,{name:"pendingTodos"})
  pendingTodos():number{
    return this.todoServices.getPendingTodo();
  }

  @Query(()=>Int,{name:"comletedTodos"})
  comletedTodos():number{
    return this.todoServices.getCompleteTodo();
  }

  @Query(()=>AgregationsType)
  agregations():AgregationsType{

    return {
      completed:this.comletedTodos(),
      pending:this.pendingTodos(),
      total:this.totalTodos()
    }
  }


}
