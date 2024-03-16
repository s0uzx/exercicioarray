// Defino um array chamado 'pares' contendo números pares
const pares = [0, 2, 4, 6, 8, 10, 12, 14];

// Utilizo o método 'find' para encontrar o primeiro elemento no array 'pares' que atenda à condição definida pela função.
// No caso, a condição é que o número seja maior que 2.
const encontrado = pares.find(number => number > 2);

// Exibo o valor encontrado, que será 4, no caso.
console.log(encontrado);


// Ou seja, o método 'find' itera sobre cada elemento no array 'pares' e retorna o primeiro número que atende à condição definida na função (o 4).


//Outro exemplo:


// Defino um array chamado 'ímpares' que contém números ímpares
const ímpares = [1, 3, 5, 7, 9, 11, 13, 15];

// Utilizo o método 'find' para encontrar o primeiro elemento no array 'ímpares' que atenda à condição definida pela mesma fórmula do exemplo anterior.
// Agora a condição é que o número seja maior que 3.
const achado = ímpares.find(number => number > 3);

// Exibo o valor encontrado 
console.log(achado);

// Nesse exeplo, o número encontrado será o 5, já que ele é o primeiro número da sequência que defini que é maior que 3.
