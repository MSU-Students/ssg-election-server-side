import { AccountTypeDto } from './entities/account-type.dto';
import { PrimeMinisterDto } from './entities/prime-minister.dto';
import { AdminDto } from './entities/admin.dto';
import { RepresentativeDto } from './entities/representative.dto';
import { VoterDto } from './entities/voter.dto';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { VoterController } from './voter/voter.controller';
import { VoterService } from './voter/voter.service';
import { RepresentativeController } from './representative/representative.controller';
import { RepresentativeService } from './representative/representative.service';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';
import { PrimeMinisterController } from './prime-minister/prime-minister.controller';
import { PrimeMinisterService } from './prime-minister/prime-minister.service';
import { AccountTypeController } from './account-type/account-type.controller';
import { AccountTypeService } from './account-type/account-type.service';
import { UserDto } from './user';
import { AuthModule } from './user/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserDto,
      VoterDto,
      RepresentativeDto,
      AdminDto,
      PrimeMinisterDto,
      AccountTypeDto,
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ssgdb',
      entities: [
        UserDto,
        VoterDto,
        RepresentativeDto,
        AdminDto,
        PrimeMinisterDto,
        AccountTypeDto,
      ],
      synchronize: true,
      dropSchema: true,
    }),
    AuthModule,
  ],
  controllers: [
    UserController,
    VoterController,
    RepresentativeController,
    AdminController,
    PrimeMinisterController,
    AccountTypeController,
  ],
  providers: [
    UserService,
    VoterService,
    RepresentativeService,
    AdminService,
    PrimeMinisterService,
    AccountTypeService,
  ],
})
export class AppModule {}
