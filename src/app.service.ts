import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return [1, 2, 3];
  }
}
