import { Injectable } from '@nestjs/common';
import { extractFunctionDeclarations, getCppAst } from './ast';
import { get } from 'http';
import e from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getAst(): Promise<string> {
    const ast = await getCppAst('src/sample/example.cpp');
    const functions = await extractFunctionDeclarations(ast);
    return ast;
    // return functions.join(', ');
  }
}
