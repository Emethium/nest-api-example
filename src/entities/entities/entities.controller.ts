import { Controller, Get } from '@nestjs/common';

@Controller('entities')
export class EntitiesController {
  @Get()
  index(): string {
    return "Fucking monads"
  }
}
