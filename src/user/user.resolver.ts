import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './user.type';
import { UseGuards } from '@nestjs/common';
import { MyAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/get-user.decorator';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(MyAuthGuard)
  @Query((returns) => UserType)
  profile(@GetUser() user) {
    return user;
  }
}
