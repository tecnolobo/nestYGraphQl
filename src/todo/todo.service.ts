import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {

  private todos:Todo[]=[
    {id:1,descrtion:"OPiedra del alma",done:true}
    ,{id:2,descrtion:"OPiedra del espacop",done:false}
    ,{id:3,descrtion:"OPiedra del poder",done:false}
  ];


  findAll():Todo[]{
    return this.todos;
  }

  findOne(id:number){
    const todo= this.todos.find(todo=>todo.id==id);

    if(!todo){
      throw new NotFoundException(`Todo con ${id} no existe`);
    }

    return todo
  }

}
