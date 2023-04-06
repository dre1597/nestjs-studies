import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsPositive()
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
