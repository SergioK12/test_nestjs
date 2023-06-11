export enum Taskstatus{
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    FINISH = 'FINISH',
}

export class Task {
    id: string;
    title: string;
    description: string;
    status: Taskstatus;
}

