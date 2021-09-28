//1)Para a string texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.", exibir no console:
//a)O número de caracteres da string.
//b)A string com todas suas letras em maiúsculo.
//c)O número de vogais da string.
//d)A string com todas suas letras em minúsculo.
//e)Fazer a busca pela palavra humanidade e exibir o index onde ela está.

let texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.";

console.log(texto.length);
console.log(texto.toUpperCase());
let contagemVogais = 0
for(i = 0; i < texto.length; i++) {
    if(texto.charAt(i) == 'a' || texto.charAt(i) == 'e' || texto.charAt(i) == 'i' || texto.charAt(i) == 'o' || texto.charAt(i) == 'u' ){
        contagemVogais += 1;
    }
}
console.log(contagemVogais + 1)
console.log(texto.toLowerCase())
console.log()

//       //      //          //      //           //      //      //

//2)Percorrer os números pares menores que 100.
//a)Adicionar em um array.
//b)Transformar o array em string.
//c)Exibir no console.
let numerosPares = [];
for (i = 1; i < 100; i++){
    if(i % 2 == 0){
        numerosPares.push(i);
    }
}
console.log(numerosPares.join(', '));
