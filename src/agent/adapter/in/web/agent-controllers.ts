import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAgentUseCase } from '../../../application/ports/in/create-agent-use-case';
import { CreateAgentDto } from './agent.dto';

@ApiTags('agents')
@Controller('agents')
export class AgentController {
  constructor(
    @Inject('CreateAgentUseCase')
    private createAgentUseCase: CreateAgentUseCase,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new agent' })
  @ApiBody({ type: CreateAgentDto })
  @ApiResponse({
    status: 201,
    description: 'The agent has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async register(
    @Body() createAgentDto: { email: string; name: string; password: string },
  ) {
    return this.createAgentUseCase.handle(createAgentDto);
  }
}
