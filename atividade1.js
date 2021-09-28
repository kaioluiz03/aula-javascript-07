//1)Criar um array com os nomes de 7 cidades de Pernambuco:
//a)Ordenar seus elementos na ordem invertida.
//b)Exibir no console.
//c)Adicionar duas cidades usando splice('Salgueiro','Abreu e Lima').
//d)Exibir no console.

const cidadesPE = ['Olinda','Belo Jardim','Gravatá','Arcoverde','Igarassu','Goiana','Moreno'];

cidadesPE.reverse();
console.log(cidadesPE);
cidadesPE.splice(2, 0, "Salgueiro","Abreu e Lima");
console.log(cidadesPE);

//       //      //          //      //           //      //      //

//2)Criar um array com os valores 1,4,8,6,9,2,6,7,3,0,5
//a)Obter qual o index onde está o elemento 9.
//b)Exibir no console qual a posição no array em que o elemento 9 está.

const numeros = [1,4,8,6,9,2,6,7,3,0,5];
let posicao = numeros.indexOf(9);
console.log('O elemento 9 está na posição ' + posicao);