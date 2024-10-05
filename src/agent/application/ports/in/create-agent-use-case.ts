import { Agent } from '../../../domain/agent';

export interface CreateAgentCommand {
  email: string;
  name: string;
  password: string;
}

export interface CreateAgentUseCase {
  handle(command: CreateAgentCommand): Promise<Agent>;
}
