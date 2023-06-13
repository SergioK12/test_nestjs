import { Taskstatus } from "../task.entity"

export class UpdateTaskDto{
    title?: string;
    description?: string;
    status?: Taskstatus;
}