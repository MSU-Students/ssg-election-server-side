import { VoteRepDto } from '../entities/vote-rep.dto';
import { VoteRepService } from './../vote-rep/vote-rep.service';
import { JwtRefreshTokenStrategy } from './jwt.refresh.token.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user.service';
import { AuthController } from './auth.controller';
import { JwtConfig } from '../config/jwt.config.type';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwTStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserController } from './user.controller';
import { UserDto } from './user.entity';
import posConfiguration from '../config/configuration';
import { StudentService } from '../student/student.service';
import { StudentDto } from '../entities/student.dto';
@Module({
  imports: [
    TypeOrmModule.forFeature([UserDto, StudentDto, VoteRepDto]),
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(posConfiguration)],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<JwtConfig>('refresh').secret,
        signOptions: {
          expiresIn: configService.get<JwtConfig>('refresh').expiresIn,
        },
      }),
    }),
  ],
  providers: [
    AuthService,
    StudentService,
    VoteRepService,
    LocalStrategy,
    JwTStrategy,
    UserService,
    JwtRefreshTokenStrategy,
  ],
  exports: [AuthService],
  controllers: [AuthController, UserController],
})
export class AuthModule {}
