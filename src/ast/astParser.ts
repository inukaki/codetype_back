// AST出力から関数宣言を抽出する関数
export function extractFunctionDeclarations(astOutput: string): string[] {
    const functionDecls: string[] = [];
    const lines = astOutput.split('\n');

    for (const line of lines) {
        if (line.includes('FunctionDecl')) {
            functionDecls.push(line.trim());
        }
    }

    return functionDecls;
}

// 他にも変数宣言や他の構造を抽出する関数を追加可能
