import { Controller, Get } from '@nestjs/common';

@Controller('api/tasks')
export class TasksController {
  @Get()
  getNumeros() {
    return [1, 2, 3, 10];
  }
}
