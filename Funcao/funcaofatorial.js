function fatorial(n) {
    if (n === 1) {
        return 1; // Caso base: quando n é 1, para a recursão
    }
    return n * fatorial(n - 1); // Chama a si mesma
}

console.log(fatorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
