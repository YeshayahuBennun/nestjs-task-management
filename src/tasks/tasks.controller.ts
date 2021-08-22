import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tastkService: TasksService) {}

  @Get()
  getAllTask() {
    return this.tastkService.getAllTask();
  }
}
