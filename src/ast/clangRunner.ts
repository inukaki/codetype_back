import { exec } from 'child_process';
import * as path from 'path';
const CLANG_PATH = 'C:/Program Files/LLVM/bin/clang.exe';

// 標準ライブラリのインクルードパスを指定
const INCLUDE_PATHS = [
    'C:/Program Files/LLVM/lib/clang/18/include',
    'C:/Program Files/LLVM/include',
    
    // C++用のライブラリが入っているはず（includeできない）
    'C:/MinGW64/lib',
    'C:/MinGW64/include',
    
    // C用のライブラリが入っている
    'C:/MinGW/lib',
    'C:/MinGW/include',
];

// Clangを実行してASTを取得する関数
export async function getCppAst(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const includeOptions = INCLUDE_PATHS.map(p => `-I "${p}"`).join(' ');
        const command = `"${CLANG_PATH}" -Xclang -ast-dump -fsyntax-only ${includeOptions} "${path.resolve(filePath)}"`;
        console.log(command);
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`エラーが発生しました: ${stderr}`);
            } else {
                resolve(stdout);
            }
        });
    });
}
