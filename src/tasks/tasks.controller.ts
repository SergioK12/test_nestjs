import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { TaskDto } from './dto/create_task_DTO';
import { UpdateTaskDto } from './dto/update_task_DTO';

@Controller('tasks')
export class TasksController {

    constructor(private task: TasksService) { }
    @Get()
    getAllTask() {
        return this.task.GetAlltask();
    }

    @Post()
    createTask(@Body() newTask: TaskDto) {

        return this.task.CreateTask(newTask.title, newTask.description);

    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        return this.task.DeleteTask(id);
        
    }

    @Patch(":id")
    updatetask(@Param("id") id: string, @Body() updatedfields:  UpdateTaskDto){
        return this.task.updatetask(id, updatedfields);
    }    
}
