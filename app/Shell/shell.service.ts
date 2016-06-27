/**
 * Created by tahirhsn on 6/28/2016.
 */
import { Injectable } from '@angular/core';

import { ToDo } from '../core/entities/toDo.entity'
import { ToDoList } from '../core/constant/toDoList.constant'

@Injectable()
export class shellService {
    getToDoList() {
        return ToDoList;
    }
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<ToDo[]>(resolve =>
            setTimeout(() => resolve(ToDoList), 2000) // 2 seconds
        );
    }
}