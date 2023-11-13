import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(private configService: ConfigService) {}

  test() {
    console.log(this.configService.get('HELLO_WORLD'));
    return '123';
  }
}
