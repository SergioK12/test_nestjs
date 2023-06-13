import { IsNotEmpty, isString, IsString, Min, MinLength } from 'class-validator'
export class TaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    title: string
    description: string
}