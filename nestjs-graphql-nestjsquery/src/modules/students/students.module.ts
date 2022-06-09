import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateStudentInput, StudentDto, UpdateStudentInput } from './dto';
import { Student } from './entities';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Student])],
      resolvers: [
        {
          DTOClass: StudentDto,
          EntityClass: Student,
          CreateDTOClass: CreateStudentInput,
          UpdateDTOClass: UpdateStudentInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class StudentsModule {}
