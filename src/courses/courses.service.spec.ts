import { CoursesService } from './courses.service';
import { NotFoundException } from '@nestjs/common';

describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id = '';
    date = new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // describe('findOne', () => {
  //   describe('buscar curso pelo id', () => {
  //     it('deve retornar o objeto Course', async () => {
  //       const courseId = '1';
  //       const expectedCourse = {};

  //       courseRepository.findOne.mockReturnValue(expectedCourse);
  //       const course = await service.findOne(courseId);
  //       expect(course).toEqual(expectedCourse);
  //     });

  //     it('deve retornar NotFoundException', async () => {
  //       const courseId = '1';

  //       courseRepository.findOne.mockReturnValue(undefined);

  //       try {
  //         await service.findOne(courseId);
  //       } catch (error) {
  //         expect(error).toBeInstanceOf(NotFoundException);
  //         expect(error.message).toEqual(`Course ID ${courseId} not found`);
  //       }
  //     });
  //   });
  // });
});
