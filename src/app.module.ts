import { AccountTypeDto } from './entities/account-type.dto';
import { PrimeMinisterDto } from './entities/prime-minister.dto';
import { AdminDto } from './entities/admin.dto';
import { RepresentativeDto } from './entities/representative.dto';
import { VoterDto } from './entities/voter.dto';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserDto } from './entities/user.dto';
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
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { CandidateService } from './candidate/candidate.service';
import { CandidateController } from './candidate/candidate.controller';
import { ElectionService } from './election/election.service';
import { ElectionController } from './election/election.controller';
import { TempTallyService } from './temp-tally/temp-tally.service';
import { TempTallyController } from './temp-tally/temp-tally.controller';
import { PositionsService } from './positions/positions.service';
import { PositionsController } from './positions/positions.controller';
import { StudentAcademicYrService } from './student-academic-yr/student-academic-yr.service';
import { StudentAcademicYrController } from './student-academic-yr/student-academic-yr.controller';

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
  ],
  controllers: [
    UserController,
    VoterController,
    RepresentativeController,
    AdminController,
    PrimeMinisterController,
    AccountTypeController,
    StudentController,
    CandidateController,
    ElectionController,
    TempTallyController,
    PositionsController,
    StudentAcademicYrController,
  ],
  providers: [
    UserService,
    VoterService,
    RepresentativeService,
    AdminService,
    PrimeMinisterService,
    AccountTypeService,
    StudentService,
    CandidateService,
    ElectionService,
    TempTallyService,
    PositionsService,
    StudentAcademicYrService,
  ],
})
export class AppModule {}
