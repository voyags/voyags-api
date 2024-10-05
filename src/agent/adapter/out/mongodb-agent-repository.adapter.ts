import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AgentDomainRepository } from '../../application/ports/out/agend-repository';
import { AgentEntity } from './agent-entity';
import { AgentMapper } from './agent-mapper';
import { Model } from 'mongoose';

@Injectable()
export class MongodbAgentRepositoryAdapter implements AgentDomainRepository {
  constructor(
    @InjectModel(AgentEntity.name) private agentModel: Model<AgentEntity>,
    private mapper: AgentMapper,
  ) {}

  async save(agent: any): Promise<any> {
    const persistenceEntity = this.mapper.mapToPersistence(agent);
    const savedEntity = await this.agentModel.create(persistenceEntity);
    return this.mapper.mapToDomain(savedEntity);
  }

  //TODO: Implement the rest of the methods
  async findById(id: string): Promise<any> {
    return console.log('find by id', id);
  }

  //TODO: Implement the rest of the methods
  async findByEmail(email: string): Promise<any> {
    return console.log('find by email', email);
  }

  //TODO: Implement the rest of the methods
  async update(agent: any): Promise<any> {
    return agent;
  }
}
