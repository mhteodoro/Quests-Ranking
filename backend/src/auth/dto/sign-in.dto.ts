import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class SignInDto {
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password: string;
}
