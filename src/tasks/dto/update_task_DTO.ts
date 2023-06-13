import { IsIn, IsOptional, IsString } from "class-validator";
import { Taskstatus } from "../task.entity"

export class UpdateTaskDto{
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([Taskstatus.PENDING, Taskstatus.IN_PROGRESS,Taskstatus.FINISH])
    status?: Taskstatus;
}