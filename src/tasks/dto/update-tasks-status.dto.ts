import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus) //@IsEnum calls the class TaskStatus to access this enum list
  status: TaskStatus;
}
