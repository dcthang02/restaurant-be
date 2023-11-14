import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { TokenType } from './auth.type';
import { AuthInput } from './auth.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query((returns) => String)
  hello() {
    return 'Hello';
  }

  @Mutation((returns) => TokenType)
  signup(@Args('authInput') authInput: AuthInput) {
    return this.authService.createUser(authInput);
  }

  @Mutation((returns) => TokenType)
  signin(@Args('authInput') authInput: AuthInput) {
    return this.authService.signin(authInput);
  }
}
