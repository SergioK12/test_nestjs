import { Injectable, Module } from '@nestjs/common';
import { Task, Taskstatus } from './task.entity';

@Injectable()
export class TasksService {

    private task: Task[] =  [
        {
            id: "1",
            title: 'Algo',
            description: 'XD',
            status: Taskstatus.PENDING
        }, 
    ]

    GetAlltask() {
        return this.task;
    }

    CreateTask(title: string, description: string, ){
        const mytask = {
            id: Date(), 
            title,
            description,
            status: Taskstatus.PENDING,
        }
        this.task.push(mytask);

        return this.task; 
    }

    DeleteTask(id: string){
        
    }
}

