
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
import { UserDto } from './user';
import { AuthModule } from './user/auth.module';
import { StudentDto } from './entities/student.dto';
import { CandidateDto } from './entities/candidate.dto';
import { ElectionDto } from './entities/election.dto';
import { TempTallyDto } from './entities/temp-tally.dto';
import { StudentAcademicYrDto } from './entities/student-academic-yr.dto';
import { StudentController } from './student/student.controller';
import { CandidateController } from './candidate/candidate.controller';
import { ElectionController } from './election/election.controller';
import { TempTallyController } from './temp-tally/temp-tally.controller';
import { StudentAcademicYrController } from './student-academic-yr/student-academic-yr.controller';
import { StudentService } from './student/student.service';
import { CandidateService } from './candidate/candidate.service';
import { ElectionService } from './election/election.service';
import { TempTallyService } from './temp-tally/temp-tally.service';
import { StudentAcademicYrService } from './student-academic-yr/student-academic-yr.service';
import { MediaService } from './media/media.service';
import { MediaController } from './media/media.controller';
import { MediaDto } from './entities/media.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserDto,
      VoterDto,
      RepresentativeDto,
      AdminDto,
      PrimeMinisterDto,
      StudentDto,
      CandidateDto,
      ElectionDto,
      TempTallyDto,
      StudentAcademicYrDto,
      MediaDto,
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
        StudentDto,
        CandidateDto,
        ElectionDto,
        TempTallyDto,
        StudentAcademicYrDto,
        MediaDto,
      ],
      // synchronize: true,
      // dropSchema: true,
    }),
    AuthModule,
  ],
  controllers: [
    UserController,
    VoterController,
    RepresentativeController,
    AdminController,
    PrimeMinisterController,
    StudentController,
    CandidateController,
    ElectionController,
    TempTallyController,
    StudentAcademicYrController,
    MediaController,
  ],
  providers: [
    UserService,
    VoterService,
    RepresentativeService,
    AdminService,
    PrimeMinisterService,
    StudentService,
    CandidateService,
    ElectionService,
    TempTallyService,
    StudentAcademicYrService,
    MediaService,
  ],
})
export class AppModule {}
