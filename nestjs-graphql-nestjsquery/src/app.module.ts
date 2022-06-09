import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { graphqlConfig, typeormConfig } from './config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),
    TypeOrmModule.forRoot(typeormConfig),
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
