import { Test, TestingModule } from '@nestjs/testing';
import { AgentService } from '../../../application/services/agent-services';
import { AgentDomainRepository } from '../../../application/ports/out/agend-repository';

describe('AgentService', () => {
  let service: AgentService;
  let repository: AgentDomainRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AgentService,
        {
          provide: 'AgentDomainRepository',
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AgentService>(AgentService);
    repository = module.get<AgentDomainRepository>('AgentDomainRepository');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have repository injected', () => {
    expect(service['repository']).toBe(repository);
  });
});
