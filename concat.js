// Defino a constante "cerejinha" para armazenar uma lista de números que representa uma data de nascimento [dia, mês, ano].
const cerejinha = [25, 9, 2005];

// Defino a constante "sorrisinho" para armazenar outra lista de números que representa outra data de nascimento [dia, mês, ano].
const sorrisinho = [6, 3, 2008];

// Utilizo o método "concat" para combinar as listas "cerejinha" e "sorrisinho" em uma única lista chamada "casal".
const casal = cerejinha.concat(sorrisinho);

// Exibo no console a lista "casal", que agora contém as datas das listas "cerejinha" e "sorrisinho".
console.log(casal);



// Outro exemplo:
// Defino uma constante "namoro" que armazena uma sequência de números representando a data do início do meu namoro [dia, mês, ano].
const namoro = [2, 5, 2022];

// Defino outra constante "conversa" que armazena outra sequência de números representando a data em que comecei a conversar com o meu namorado [dia, mês, ano].
const conversa = [18, 4, 2022];

// Utilizo o método "concat" para combinar as constantes "namoro" e "conversa" em uma única lista chamada "datas".
const datas = namoro.concat(conversa);
