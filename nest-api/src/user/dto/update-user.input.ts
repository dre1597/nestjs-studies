import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: "This field can't be empty" })
  name?: string;

  @IsOptional()
  @IsEmail()
  @IsNotEmpty({ message: "This field can't be empty" })
  email?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password?: string;
}
