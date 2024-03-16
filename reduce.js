// Declaro uma constante chamada 'idadesDosMembrosDoBTS' que armazena as idades dos membros do BTS em um array.
const idadesDosMembrosDoBTS = [26, 28, 28, 29, 30, 31, 31];

// Utilizao o método reduce() para calcular a soma das idades.
// A funçãopassada para o método reduce() recebe dois parâmetros: acumulador e valores.
// O acumulador armazena o valor acumulado durante cada iteração.
// O parâmetro valores representa o valor atual da iteração na matriz.
const somaDelas = idadesDosMembrosDoBTS.reduce((acumulador, valores) => acumulador + valores, 0);
// A função de callback soma o valor do acumulador ao valor atual da iteração e retorna o resultado.

// O console exibe a soma das idades dos membros do BTS (no caso será 203).
console.log(somaDelas);


//Outro exemplo:

// Declaro uma constante chamada 'idadesDosVencedoresBDA23' que armazena as idades dos vencedores da Batalha da Aldeia 7 anos de 2023 em um array.
const idadesDosVencedoresBDA23 = [24, 26, 27, 29, 30];

// Utilizo o método reduce() para calcular a soma das idades.
// A função recebe dois parâmetros: 'acumulador' e 'valorAtual'.
// O 'acumulador' armazena o valor acumulado durante cada iteração.
// O parâmetro 'valorAtual' representa o valor atual da iteração no array.
const somaDasIdades = idadesDosVencedoresBDA23.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
// A função soma o valor do acumulador ao valorAtual da iteração e retorna o resultado.

// Exibe a soma das idades dos vencedores da Batalha da Aldeia 7 anos de 2023 no console (no caso,136).
console.log("A soma das idades dos vencedores da Batalha da Aldeia 7 anos de 2023 é:", somaDasIdades);


