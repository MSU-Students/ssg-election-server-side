import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../interfaces/user.interface';
import { UserDto } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userService.findByUsername(username);
    const passwordMatched = user && (await bcrypt.compare(pass, user.password));
    if (passwordMatched && user.status != 'disabled') {
      return user;
    }
    return null;
  }

  async login(user: any) {
    // use sub for userId to be consistent with JWT Standards
    const accessToken = this.getAccessToken(user);
    const refreshToken = this.jwtService.sign({ userId: user.account_id });
    let expiresIn = new Date();
    expiresIn.setSeconds(
      expiresIn.getSeconds() +
        parseInt(this.configService.get('jwt').expiresIn, 10),
    );
    return {
      userId: user.account_id,
      accessToken,
      expiresIn,
      refreshToken,
    };
  }

  getAccessToken(user: UserDto) {
    const payload = {
      username: user.username,
      sub: user.account_id,
    };
    return this.jwtService.sign(payload, {
      secret: this.configService.get('jwt').secret,
      expiresIn: this.configService.get('jwt').expiresIn,
    });
  }
  private hashName(name: string) {
    let hash = 0;
    if (name.length == 0) return hash;
    for (let i = 0; i < name.length; i++) {
        const chr = name.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash = hash & hash;
    }
    return hash;
  }
  private hashToString(hash: number) {
    hash = hash < 0 ? (-1 * hash) - 1: hash;
    const hashStr = String(hash);
    const CHARSET = 'GHRSTUV67ABCIJKLWXYZ12345MNOPQDEF890'
    return hashStr.split(/(\d{2})/)
      .filter(v=> v)
      .map(n => CHARSET[Number(n) % CHARSET.length])
      .join('');
  }
  async register(user: UserDto): Promise<UserDto> {
    const student = user.student;
    const name = `${student.first_name}${student.last_name}${student.middle_name}`;
    const hash = this.hashName(name + String(Math.random()));
    const username = this.hashToString(hash);

    user.username = username;
    user.password = username + String(student.school_id || 0);

    const foundUser = await this.userService.findByUsername(username);
    if (foundUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    user.username = user.username.toLowerCase();
    return await this.userService.create(user);
  }

  async setCurrentRefreshToken(refreshToken: string, userId: number) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    return await this.userService.setCurrentRefreshToken(
      currentHashedRefreshToken,
      userId,
    );
  }

  async getUserIfRefreshTokenMatches(refreshToken: string, userId: number) {
    const user = await this.userService.findOne(userId);
    if (refreshToken === user.refreshToken) {
      return user;
    }
  }

  async removeRefreshToken(userId: number) {
    return this.userService.setCurrentRefreshToken(null, userId);
  }

  pick(O: any, props: string[]): any {
    return props.reduce((o, k) => ((o[k] = O[k]), o), {});
  }
}
