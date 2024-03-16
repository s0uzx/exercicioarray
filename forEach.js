// Defino um array com os principais nomes do trap brasileiro
const artistasTrapBrasileiro = ['L7nnon', 'Xamã', 'Matuê', 'Veigh', 'Orochi', 'Djonga'];

// Itero cada nome usando o método 'forEach'
artistasTrapBrasileiro.forEach(nome => {
  // Exibo o nome do artista em letras maiúsculas
  console.log(nome.toUpperCase());
});

// A exibição no console ficará assim:
//L7NNON
//XAMÃ
//MATUÊ
//VEIGH
//OROCHI
//DJONGA

// Outro exemplo:

// Definindo um array com as melhores músicas do The Weeknd
const melhoresDoTheWeeknd = ['Blinding Lights', 'Starboy', 'Cant Feel My Face','The Hills','I Feel It Coming'];
  
  // Itero cada música usando o método forEach
  melhoresDoTheWeeknd.forEach((musica, indice) => {
    // Imprimindo o nome da música e seu índice em letras maiúsculas
    console.log(`Música ${indice + 1}: ${musica.toUpperCase()}`);
  });

  // Elas apareceram assim no console:
  
//Música 1: BLINDING LIGHTS
//Música 2: STARBOY
//Música 3: CANT FEEL MY FACE
//Música 4: THE HILLS
//Música 5: I FEEL IT COMING
  