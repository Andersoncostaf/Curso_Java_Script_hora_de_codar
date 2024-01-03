let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Retorna um novo array contendo o elemento no índice 4 (5º elemento) até o índice 5 (exclusive)
console.log(nums.slice(4, 5)); // Saída: [4]

// Retorna um novo array contendo os elementos nos índices 4 (inclusive) até 6 (exclusive)
console.log(nums.slice(4, 6)); // Saída: [4, 5]

// Retorna um novo array contendo os elementos a partir do índice 2 até o final
console.log(nums.slice(2)); // Saída: [2, 3, 4, 5, 6, 7, 8, 9]

// Retorna um novo array contendo os dois últimos elementos do array original
console.log(nums.slice(-2)); // Saída: [8, 9]

// Retorna um novo array contendo os elementos a partir do índice 3 até os dois últimos (excluindo-os)
console.log(nums.slice(3, -2)); // Saída: [3, 4, 5, 6, 7]
