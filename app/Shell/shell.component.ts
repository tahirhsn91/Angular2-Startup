/**
 * Created by tahirhsn on 6/27/2016.
 */
import { Component } from '@angular/core';
//import { ToDo } from '../core/entities/toDo.entity'
//import { ToDoList } from '../core/constant/toDoList.constant'

export class ToDo {
    value: string;
    done: boolean;
}

const ToDoList: ToDo[] = [
    { 'value':'item1','done': false},
    { 'value':'item2','done': false}
];

@Component({
    selector: 'shell',
    templateUrl: './app/shell/shell.html',
    providers : [ToDoList]
})

export class shell {
    title = 'ToDo List';
    toDoList = ToDoList;
    newItem = "";

    add(){
        this.toDoList.push({ "value" : this.newItem});
        this.newItem = "";
    }

    remove(item: ToDo){
        this.toDoList.pop(item);
    }

    done(item: ToDo){
        if(item.done){
            item.done = false;
        }
        else{
            item.done = true;
        }
    }

}