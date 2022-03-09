import { Test, TestingModule } from '@nestjs/testing';
import { StudentAcademicYrController } from './student-academic-yr.controller';

describe('StudentAcademicYrController', () => {
  let controller: StudentAcademicYrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentAcademicYrController],
    }).compile();

    controller = module.get<StudentAcademicYrController>(StudentAcademicYrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
