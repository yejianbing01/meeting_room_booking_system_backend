import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { RequireLogin, RequirePermission, UserInfo } from './custom.decorater';
import { JwtUserData } from './login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  @RequireLogin()
  @RequirePermission('ddd')
  aaaa(
    @UserInfo('username') username: string,
    @UserInfo() userInfo: JwtUserData,
  ) {
    return {
      username,
      userInfo,
    };
  }

  @Get('bbb')
  @SetMetadata('require-permission', ['ddd'])
  @SetMetadata('require-login', true)
  bbb() {
    return 'bbb';
  }
}
