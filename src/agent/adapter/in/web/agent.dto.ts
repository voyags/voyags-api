import { ApiProperty } from '@nestjs/swagger';

export class CreateAgentDto {
  @ApiProperty({
    example: 'john@example.com',
    description: 'The email of the agent',
  })
  email: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the agent' })
  name: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the agent',
  })
  password: string;
}
