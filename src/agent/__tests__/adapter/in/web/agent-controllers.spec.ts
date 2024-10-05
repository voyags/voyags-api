import { Test, TestingModule } from '@nestjs/testing';
import { AgentController } from '../../../../adapter/in/web/agent-controllers';
import { CreateAgentUseCase } from '../../../../application/ports/in/create-agent-use-case';

describe('AgentController', () => {
  let agentController: AgentController;
  let createAgentUseCase: CreateAgentUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentController],
      providers: [
        {
          provide: 'CreateAgentUseCase',
          useValue: {
            handle: jest.fn(),
          },
        },
      ],
    }).compile();

    agentController = module.get<AgentController>(AgentController);
    createAgentUseCase = module.get<CreateAgentUseCase>('CreateAgentUseCase');
  });

  it('should be defined', () => {
    expect(agentController).toBeDefined();
  });

  it('should have createAgentUseCase defined', () => {
    expect(createAgentUseCase).toBeDefined();
  });

  it('should inject CreateAgentUseCase into the controller', () => {
    expect(agentController['createAgentUseCase']).toBe(createAgentUseCase);
  });
});
