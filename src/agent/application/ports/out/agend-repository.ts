import { Agent } from '../../../domain/agent';

export interface AgentRepositoryPort {
  save(agent: Agent): Promise<Agent>;
  findById(id: string): Promise<Agent | null>;
  findByEmail(email: string): Promise<Agent | null>;
  update(agent: Agent): Promise<Agent>;
}
