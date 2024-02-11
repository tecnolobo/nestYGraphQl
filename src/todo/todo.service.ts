import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusArgs } from './dto/arg/status.args';
import { UpdateTodoInput,CreateTodoInput } from './dto/input';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {

  private todos:Todo[]=[
    {id:1,descrtion:"OPiedra del alma",done:true}
    ,{id:2,descrtion:"OPiedra del espacop",done:false}
    ,{id:3,descrtion:"OPiedra del poder",done:false}
  ];


  findAll(statusArgs:StatusArgs):Todo[]{

    const {status} =statusArgs;

    if(status!==undefined) return this.todos.filter(todo=>todo.done===status);

    return this.todos;
  }

  findOne(id:number){
    const todo= this.todos.find(todo=>todo.id==id);

    if(!todo){
      throw new NotFoundException(`Todo con ${id} no existe`);
    }

    return todo
  }


  create(createTodoInput:CreateTodoInput):Todo{

    const todo = new Todo;
    todo.descrtion= createTodoInput.description;
    todo.done=false;
    todo.id= Math.max(...this.todos.map(todo=>todo.id),0) + 1;

    this.todos.push(todo);

    return todo;

  }


  update({id,description,done}:UpdateTodoInput){
    
    const todoUpdate = this.findOne(id);
    
    if(description){
      todoUpdate.descrtion=description;
    }

    if(done!== undefined) todoUpdate.done = done;
    
    this.todos = this.todos.map(todo=>{
      if(todo.id ===id){
        return todoUpdate;
      }

      return todo;
    });


    return todoUpdate;

  }

  delete(id:number):Boolean{
    const todo= this.findOne(id);

    this.todos= this.todos.filter(todo=>todo.id!==id);

    return true;
  }

}
