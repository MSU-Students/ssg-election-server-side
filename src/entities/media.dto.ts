import { StudentDto } from 'src/entities/student.dto';
import { Media } from '../interfaces/media.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('profileImage')
export class MediaDto implements Media {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty()
  @Column()
  mimeType: string;

  @ApiProperty({ required: false })
  @Column()
  filename: string;

  @Column({
    type: 'mediumblob',
  })
  data: Uint8Array;

  @ApiProperty({ required: false, type: () => StudentDto })
  @ManyToOne(() => StudentDto, (student) => student.media)
  student: StudentDto;
}
