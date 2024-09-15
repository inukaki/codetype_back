import { Injectable } from '@nestjs/common';
import { getCppAst } from './ast';
import { get } from 'http';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getAst(): Promise<string> {
    const ast = await getCppAst('src/sample/example.cpp');
    return ast;
  }
}
