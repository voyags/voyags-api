import { Inject, Injectable } from '@nestjs/common';
import {
  CreateAgentCommand,
  CreateAgentUseCase,
} from '../ports/in/create-agent-use-case';
import { AgentDomainRepository } from '../ports/out/agend-repository';
import { Agent } from '../../domain/agent';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AgentService implements CreateAgentUseCase {
  constructor(
    @Inject('AgentDomainRepository')
    private repository: AgentDomainRepository,
  ) {}

  async handle(command: CreateAgentCommand): Promise<Agent> {
    const hashedPassword = await bcrypt.hash(command.password, 10);
    const agent = Agent.create(command.email, command.name, hashedPassword);
    return this.repository.save(agent);
  }
}
