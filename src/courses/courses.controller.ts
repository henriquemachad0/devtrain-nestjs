import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('courses')
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  @Post()
  create(@Body('name') body) {
    return body;
  }
}
