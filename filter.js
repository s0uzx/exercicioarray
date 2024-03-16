// Criei uma array chamada FiftyCents (eu juro que na minha cabeça tava mais engraçado) com os números 50, 51, 52, 53 e 54
const FiftyCents = [50, 51, 52, 53, 54];

// Utilizei o método 'filter()', que recebeu uma função que se aplica a cada elemento do array FiftyCents.
// Por conta da função, a array 'filtrado' contém apenas os números da array FiftyCents que são divisíveis por 3.
const filtrado = FiftyCents.filter(number => number % 3 === 0);

// Exibo os elementos filtrados no console (que serão o 51 e o 54, pois são os únicos divisíveis por 3 na sequência).
console.log(filtrado);


//Outro exemplo:

// Declaro um array de palavras chamado "sinceramente".
const sinceramente = ['eu', 'estou', 'completamente', 'exausto', 'de', 'digitar',];

// Uso o método filter() novamente para filtrar as palavras que começam com a letra 'e'.
// A função verifica se a primeira letra de cada palavra é 'e'.
const começacomE = sinceramente.filter(sinceramente => sinceramente.charAt(0) === 'e');

// Exibo no console os elementos filtardos (no caso, 'eu', 'estou' e 'exausto', pois eles começam com E).
console.log(começacomE);
