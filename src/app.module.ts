import { VoteSsgDto } from './entities/vote-ssg.dto';
import { VoteRepDto } from './entities/vote-rep.dto';

import { SsgMemberDto } from './entities/prime-minister.dto';
import { AdminDto } from './entities/admin.dto';
import { RepresentativeDto } from './entities/representative.dto';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { RepresentativeController } from './representative/representative.controller';
import { RepresentativeService } from './representative/representative.service';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';
import { ssgMemberController } from './prime-minister/prime-minister.controller';
import { SsgMemberService } from './prime-minister/prime-minister.service';
import { UserDto } from './user';
import { AuthModule } from './user/auth.module';
import { StudentDto } from './entities/student.dto';
import { CandidateDto } from './entities/candidate.dto';
import { ElectionDto } from './entities/election.dto';
import { TempTallyDto } from './entities/temp-tally.dto';
import { StudentController } from './student/student.controller';
import { CandidateController } from './candidate/candidate.controller';
import { ElectionController } from './election/election.controller';
import { TempTallyController } from './temp-tally/temp-tally.controller';
import { StudentService } from './student/student.service';
import { CandidateService } from './candidate/candidate.service';
import { ElectionService } from './election/election.service';
import { TempTallyService } from './temp-tally/temp-tally.service';
import { MediaService } from './media/media.service';
import { MediaController } from './media/media.controller';
import { MediaDto } from './entities/media.dto';
import { VoteSsgController } from './vote-ssg/vote-ssg.controller';
import { VoteSsgService } from './vote-ssg/vote-ssg.service';
import { VoteRepController } from './vote-rep/vote-rep.controller';
import { VoteRepService } from './vote-rep/vote-rep.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserDto,
      RepresentativeDto,
      AdminDto,
      SsgMemberDto,
      StudentDto,
      CandidateDto,
      ElectionDto,
      TempTallyDto,
      VoteRepDto,
      VoteSsgDto,
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
        RepresentativeDto,
        AdminDto,
        SsgMemberDto,
        StudentDto,
        CandidateDto,
        ElectionDto,
        TempTallyDto,
        VoteRepDto,
        VoteSsgDto,
        MediaDto,
      ],
      synchronize: true,
      dropSchema: true,
    }),
    AuthModule,
  ],
  controllers: [
    UserController,
    RepresentativeController,
    AdminController,
    ssgMemberController,
    StudentController,
    CandidateController,
    ElectionController,
    TempTallyController,
    MediaController,
    VoteSsgController,
    VoteRepController,
  ],
  providers: [
    UserService,
    RepresentativeService,
    AdminService,
    SsgMemberService,
    StudentService,
    CandidateService,
    ElectionService,
    TempTallyService,
    MediaService,
    VoteSsgService,
    VoteRepService,
  ],
})
export class AppModule {}
