import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user.controller';

@Module({
  imports: [ConfigModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
