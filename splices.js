// Crio um array inicial com personagens de Haikyuu
let personagens = ['Hinata', 'Tobio', 'Tanaka', 'Asahi', 'Sugawara'];

// Adiciono um novo personagem
personagens.splice(2, 0, 'Nishinoya'); // Adiciona o personagem 'Nishinoya' na posição 2
console.log(personagens);
 // Console: ['Hinata', 'Tobio', 'Nishinoya', 'Tanaka', 'Asahi', 'Sugawara']

// Removo um personagem
personagens.splice(3, 1);
 // Remove 1 personagem a partir da posição 3
console.log(personagens);
 // Console: ['Hinata', 'Tobio', 'Nishinoya', 'Asahi', 'Sugawara']

// Substituo dois personagens
personagens.splice(1, 2, 'Oikawa', 'Iwa'); // Remove Tobio e Nishinoya, e adiciona Oikawa e Iwa
console.log(personagens);
 // Console: ['Hinata', 'Oikawa', 'Iwa', 'Asahi', 'Sugawara']

 // Outro exemplo/;

 // Crio um array inicial com alguns times do anime Haikyuu
let times = ['Karasuno', 'Aoba Johsai', 'Shiratorizawa', 'Nekoma', 'Fukurodani'];

// Adiciono um novo time
times.splice(2, 0, 'Inarizaki'); // Adiciona o time 'Inarizaki' na posição 2
console.log(times);
 // Console: ['Karasuno', 'Aoba Johsai', 'Inarizaki', 'Shiratorizawa', 'Nekoma', 'Fukurodani']

// Removo um time
times.splice(4, 1);
 // Remove 1 time a partir da posição 4

console.log(times); 
// Console: ['Karasuno', 'Aoba Johsai', 'Inarizaki', 'Shiratorizawa', 'Fukurodani']

// Substituo dois times
times.splice(0, 2, 'Date Tech', 'Itachiyama');
 // Remove Karasuno e Aoba Johsai, e adiciona Date Tech e Itachiyama

console.log(times); 
// Console: ['Date Tech', 'Itachiyama', 'Inarizaki', 'Shiratorizawa', 'Fukurodani']

