import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTitle(): string {
    return 'NestJS, TypeORM, PostgreSQL, Swagger';
  }
}
