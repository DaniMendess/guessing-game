/*

    ** Jogo da adivinhação **

    Apresente a mensagem ao usuário:
    "Adivinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo aleatorio gerado pelo sistema.

    Enquanto o usuario nao adivinhar o numero, mostre a mensagem:
    "Erro, tente novamente:"

    Caso o usuário acerte o Número, apresentar a mensagem:
    "Parabens! Voçe adivinhou o número em x tentativas"

    substitua o "x" da mensagem pelo numero de tentativas.
    

*/


/*
 Para esse problemas usamos o laço de repetição WHILE() - ENQUANTO
*/

let result  = prompt("Adivinhe o número que estou pensando entre 0 e 10!")

let rNumber = parseInt(Math.random() * 2) // aqui estou gerando um número aleatorio de 0 a 10 e salvando em uma variavel



let attempts = 0; // aqui estou criando uma var de tentativas que foram feitas



// Usamos o laço de repetição While, enquanto esse dado for false ele irá repetir as intruções dada dentro dele 


// da função () estou perguntado se RESULT é diferente de RNUMBER 

while(Number(result) != rNumber){
    result = prompt("Erro, tente novamente")
    attempts++
}

alert("Parabens! Voçe adivinhou o número em " + attempts+ " tentativas.")

