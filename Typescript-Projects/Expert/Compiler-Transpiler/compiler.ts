// compiler.ts
interface Token {
    type: string;
    value: string;
}

function tokenize(input: string): Token[] {
    return [{ type: 'KEYWORD', value: 'let' }]; // Simplified stub
}

function parse(tokens: Token[]) {
    return { type: 'Program', body: [] };
}

console.log(parse(tokenize("let x = 10;")));
