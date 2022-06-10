import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import {
  CreateDisciplineInput,
  DisciplineDto,
  UpdateDisciplineInput,
} from './dto';
import { Discipline } from './entities';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Discipline])],
      resolvers: [
        {
          DTOClass: DisciplineDto,
          EntityClass: Discipline,
          CreateDTOClass: CreateDisciplineInput,
          UpdateDTOClass: UpdateDisciplineInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class DisciplinesModule {}
