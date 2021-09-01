import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
import * as bycript from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async singUp(authCredentioalDto: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentioalDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.usersRepository.findOne({ username });

    if (user && (await bycript.compare(password, user.password))) {
      return 'success!';
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
