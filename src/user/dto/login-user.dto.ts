import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({
    message: '用户名不允许为空',
  })
  username: string;
  @IsNotEmpty({
    message: '密码不允许为空',
  })
  password: string;
}
