import { Injectable, Module } from '@nestjs/common';
import { Task, Taskstatus } from './task.entity';
import { UpdateTaskDto } from './dto/update_task_DTO';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

    private tasks: Task[] =  [
        {
            id: "1",
            title: 'Algo',
            description: 'XD',
            status: Taskstatus.PENDING
        }, 
    ]

    GetAlltask() {
        return this.tasks;
    }

    CreateTask(title: string, description: string, ){
        const mytask = {
            id: v4(), 
            title,
            description,
            status: Taskstatus.PENDING,
        }
        this.tasks.push(mytask);

        return this.tasks; 
    }

    DeleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks;
    }

    getTaskById(id: string){
        return this.tasks.find(task => task.id === id);
    }

    updatetask(id: string, updatesfields: UpdateTaskDto): Task{
        const taskx = this.getTaskById(id);

        const  updated =  Object.assign(taskx,updatesfields);

        this.tasks =  this.tasks.map(task => task.id === id? updated: task);

        return updated;
    }
}

