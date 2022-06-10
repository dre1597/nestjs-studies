import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateLessonInput, LessonDto, UpdateLessonInput } from './dto';
import { Lesson } from './entities';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Lesson])],
      resolvers: [
        {
          DTOClass: LessonDto,
          EntityClass: Lesson,
          CreateDTOClass: CreateLessonInput,
          UpdateDTOClass: UpdateLessonInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class LessonsModule {}
