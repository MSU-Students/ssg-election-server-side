import { VoteSsgService } from './../vote-ssg/vote-ssg.service';
import { VoteRepService } from './../vote-rep/vote-rep.service';
import { UserService } from './user.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local.auth.guard';
import { AuthService } from './auth.service';
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { LoginUserDto, RefreshDto, AccessTokenDto } from './user.dto';
import { UserDto } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly voterepservice: VoteRepService,
    private readonly votessgservice: VoteSsgService,
  ) {}

  @ApiBody({ type: UserDto })
  @ApiOperation({ summary: 'Register User', operationId: 'register' })
  @ApiResponse({ status: 200, type: UserDto })
  @Post('/register')
  create(@Body() user: UserDto) {
    if (user.refreshToken == 'ssg-election') {
      return this.authService.register({
        ...user,
        refreshToken: undefined,
      });
    }
  }

  @ApiOperation({
    summary: 'Login User',
    operationId: 'login',
  })
  @ApiBody({
    type: LoginUserDto,
  })
  @ApiResponse({
    status: 200,
    type: AccessTokenDto,
  })
  @Post('login')
  async login(@Body() user: LoginUserDto) {
    const { refreshToken, accessToken, userId } = await this.authService.login(
      user,
    );
    await this.userService.setCurrentRefreshToken(refreshToken, userId);
    return { refreshToken, accessToken };
  }

  @ApiBearerAuth()
  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: 'Refresh Token',
    operationId: 'refreshToken',
  })
  @ApiBody({
    type: RefreshDto,
  })
  @ApiResponse({
    status: 200,
    type: AccessTokenDto,
  })
  @Post('refresh_token')
  async refreshToken(@Request() req) {
    const accessToken = this.authService.getAccessToken(req.user);
    return { accessToken };
  }

  @ApiOperation({
    summary: 'logout given user',
    operationId: 'logout',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logOut(@Request() req) {
    await this.authService.removeRefreshToken(req.user.userId);
  }

  @ApiOperation({
    summary: 'get profile info',
    operationId: 'getProfile',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: UserDto })
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.userService.findOne(req.user.userId);
    user.vote = await this.voterepservice.find(user.student.student_id);
    user.votessg = await this.votessgservice.find(user.student.student_id);
    return {
      ...user,
      password: undefined,
      refreshToken: undefined,
    };
  }
}
