import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { TaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private  task: TasksService){}
    @Get()
    getAllTask(){
        return this.task.GetAlltask();
    }

    @Post()
    createTask(@Body() newTask: TaskDto ){
        
        return this.task.CreateTask(newTask.title, newTask.description);

    }
}
