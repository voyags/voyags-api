import { Injectable } from '@nestjs/common';
import { Agent } from '../../domain/agent';
import { AgentEntity } from './agent-entity';

@Injectable()
export class AgentMapper {
  mapToDomain(entity: AgentEntity): Agent {
    return new Agent(
      entity.id,
      entity.email,
      entity.name,
      entity.password,
      entity.createdAt,
      entity.updatedAt,
    );
  }

  mapToPersistence(domain: Agent): Partial<AgentEntity> {
    return {
      email: domain.email,
      name: domain.name,
      password: domain.password,
      createdAt: domain.createdAt,
      updatedAt: domain.updatedAt,
    };
  }
}
