import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/user.schema';
import { AuthInput } from './auth.input';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(authInput: AuthInput) {
    const { username, password } = authInput;

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const user = new this.userModel({
      username,
      password: hashPassword,
    });

    try {
      await user.save();
      return {
        token: '123',
      };
    } catch (error) {
      console.log(error);
    }
  }

  async signin(authInput: AuthInput) {
    const { username, password } = authInput;

    const user = await this.userModel.findOne({
      username,
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = { username };
    const token = await this.jwtService.sign(payload);
    return {
      token,
    };
  }
}
