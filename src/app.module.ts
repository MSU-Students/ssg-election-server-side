import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserDto } from './entities/user.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDto]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ssgdb',
      entities: [UserDto],
      synchronize: true,
      dropSchema: true,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
