import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todolist: ToDo[]=[
    {task:'Washing Clothes', completed: true},
    {task:'Washing Dishes', completed:false},
    {task:'Grocery Shop', completed: false},

  ]
  newtask:string='';

  constructor() { }

  ngOnInit(): void {
  }
  
  addTask() {
    this.todolist.push({task: this.newtask, completed: true});
    this.newtask='';
  }
  completeTask(todoitem:ToDo) {
    todoitem.completed=true;
  }
  
}
