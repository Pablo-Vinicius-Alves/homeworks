function fatorial(n) {
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function contagem(n) {
    if (n <= 0) {
        console.log("Fim!");
        return;
    }
    console.log(n);
    contagem(n - 1);
}

function somarArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + somarArray(arr.slice(1));
}

function inverterString(str) {
    if (str === "") return "";
    return inverterString(str.slice(1)) + str[0];
}


function mdc(a, b) {
    if (b === 0) return a;
    return mdc(b, a % b);
}

console.log("Fatorial de 5:", fatorial(5));
console.log("Fibonacci de 7:", fibonacci(7));
console.log("Soma de [1,2,3,4]:", somarArray([1, 2, 3, 4]));
console.log("Inverter 'recursao':", inverterString("recursao"));
console.log("MDC de 48 e 18:", mdc(48, 18));

contagem(4);