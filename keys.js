// Defino um array com nomes de algumas cidades de São Paulo
const cidadesDeSP = ['Valinhos', 'Campinas', 'Vinhedo'];

// Determino os índices do array
const keys = cidadesDeSP.keys();

// Itero as chaves, os índices e os nomes das cidades
for (const key of keys) {
  // Exibo o índice (representando a posição da cidade no array) e o nome da cidade correspondente
  console.log(`Cidade ${key}: ${cidadesDeSP[key]}`);
}

// Ficará assim no console:
//Cidade 0: Valinhos
//Cidade 1: Campinas
//Cidade 2: Vinhedo

// Outro exemplo:

// Defino um array com alguns sabores de sorvete
const saboresDeSorvete = ['Iogurte com Amarena', 'Chocomenta', 'Pistache', 'Oreo', 'Chiclete'];

// Defino um iterador para os "potes" (índices) do array
const potes = saboresDeSorvete.keys();

// Itero os potes, os índices e os sabores de sorvete correspondentes
for (const key of potes) {
  // exibo o índice (representando a posição do sabor no array) e o nome do sabor de sorvete correspondente
  console.log(`Sabor ${key}: ${saboresDeSorvete[key]}`);
}

// Ficará assim no console:
//Sabor 0: Iogurte com Amarena
//Sabor 1: Chocomenta
//Sabor 2: Pistache
//Sabor 3: Oreo
//Sabor 4: Chiclete