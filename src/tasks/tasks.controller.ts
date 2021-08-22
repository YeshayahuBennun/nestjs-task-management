import { Controller, Get } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tastkService: TasksService) {}

  @Get()
  getAllTask(): Task[] {
    return this.tastkService.getAllTask();
  }
}
