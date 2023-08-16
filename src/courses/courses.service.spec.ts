import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { Connection } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoursesService,
        { provide: Connection, useValue: {} },
        { provide: getRepositoryToken(Course), useValue: {} },
        { provide: getRepositoryToken(Tag), useValue: {} },
      ],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
