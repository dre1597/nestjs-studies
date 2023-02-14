import { Transform, TransformFnParams } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  name: string;

  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  password: string;

  @IsEmail()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  email: string;

  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  phone: string;

  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  cpf: string;
}
