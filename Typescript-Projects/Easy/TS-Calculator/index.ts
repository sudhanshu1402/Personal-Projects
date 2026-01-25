// index.ts
function calculate(a: number, b: number, op: string): number {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 0;
    }
}
console.log("5 + 3 =", calculate(5, 3, '+'));
console.log("10 / 2 =", calculate(10, 2, '/'));
