import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { ContentDto, CreateContentInput, UpdateContentInput } from './dto';
import { Content } from './entities';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Content])],
      resolvers: [
        {
          DTOClass: ContentDto,
          EntityClass: Content,
          CreateDTOClass: CreateContentInput,
          UpdateDTOClass: UpdateContentInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class ContentsModule {}
