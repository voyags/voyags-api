import { Module } from '@nestjs/common';
import { AgentModule } from './agent/agent.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('MONGO_INITDB_ROOT_USERNAME')}:${configService.get('MONGO_INITDB_ROOT_PASSWORD')}@localhost:27017/voyags?authSource=admin`,
      }),
      inject: [ConfigService],
    }),
    AgentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
