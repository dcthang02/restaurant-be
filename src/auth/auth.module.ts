import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/user.schema';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MyAuthGuard } from './auth.guard';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      global: true,
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '86400s',
          },
        };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports: [AuthService, JwtStrategy, PassportModule],
})
export class AuthModule {}
