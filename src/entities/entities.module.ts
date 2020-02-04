import { Module } from '@nestjs/common';
import { EntitiesService } from './entities/entities.service';
import { EntitiesController } from './entities/entities.controller';

@Module({
  providers: [EntitiesService],
  controllers: [EntitiesController]
})
export class EntitiesModule {}
