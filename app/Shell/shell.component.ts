/**
 * Created by tahirhsn on 6/27/2016.
 */
import { Component, Injectable } from '@angular/core';

import { ToDo } from '../core/entities/toDo.entity';
import { shellService } from './shell.service';

@Component({
    selector: 'shell',
    templateUrl: './app/shell/shell.html',
    providers: [shellService]
})

export class shell {
    public title = 'ToDo List';
    private toDoList = [];
    private newItem = '';

    constructor(private shellService: shellService) { }

    ngOnInit(){
        //this.shellService.getToDoList().then(toDoList => this.toDoList = toDoList);
        this.toDoList  = this.shellService.getToDoList();
    }

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