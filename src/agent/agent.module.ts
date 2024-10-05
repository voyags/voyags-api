import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentEntity, AgentSchema } from './adapter/out/agent-entity';
import { AgentController } from './adapter/in/web/agent-controllers';
import { AgentService } from './application/services/agent-services';
import { AgentMapper } from './adapter/out/agent-mapper';
import { MongodbAgentRepositoryAdapter } from './adapter/out/mongodb-agent-repository.adapter';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AgentEntity.name, schema: AgentSchema },
    ]),
  ],
  controllers: [AgentController],
  providers: [
    AgentService,
    AgentMapper,
    MongodbAgentRepositoryAdapter,
    {
      provide: 'AgentDomainRepository',
      useClass: MongodbAgentRepositoryAdapter,
    },
    {
      provide: 'CreateAgentUseCase',
      useExisting: AgentService,
    },
  ],
  exports: [AgentService],
})
export class AgentModule {}
