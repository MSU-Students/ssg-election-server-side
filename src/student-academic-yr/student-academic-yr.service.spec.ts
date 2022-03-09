import { Test, TestingModule } from '@nestjs/testing';
import { StudentAcademicYrService } from './student-academic-yr.service';

describe('StudentAcademicYrService', () => {
  let service: StudentAcademicYrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentAcademicYrService],
    }).compile();

    service = module.get<StudentAcademicYrService>(StudentAcademicYrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
