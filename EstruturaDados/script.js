let a = 5;
let b = 7;

let soma = a + b;

console.log('A soma de',a, 'com' + b + 'é igual a:' + soma);

//2. Verificar se um número é par ou ímpar 
let numero = 10;
// verificando se este número 10 é par 
if (numero % 2 === 0){
    console.log(numero, 'é par');
}else{
    console.log(numero, 'é impar');
}

/**
 * 3. imprimir números de 1 a 10
 * usando o laço repetitivo 'for'
 */
for (let i = 1; 1 <= 10;i++){
    console.log(i);
}

//4. Calcular a média de notas do aluno
let notas = [7.5, 6.2, 8, 9],
    somaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }
    // é equivalente a somaNotas = somaNotas + notas[i];
    let mediaFinal = somaNotas / notas.length; 
    console.log ('A media final do aluno é:', mediaFinal);

    // 5. Encontrar o maior número de um vetor (array)
    let numeros = [8, 7, 9, 6],
        maior = 0;

for (let i = 0; i < numeros.length; ++i){
  if (numeros[i] > numeros[i=1])
    {
    maior = numeros[i];
    }   
}
console.log('O maior número da lista é:', maior);

/** 6. Contar quantas vezes um determinado
 *      valor aparece na lista
 */ 
   let valores = [3, 5, 3, 8, 7, 4, 5, 5, 3, 9, 3],
        alvo = 3,
        contador = 0;
    
for (let i = 0; i < valores.length; i++){
    if (valores[i] === alvo ) {
        contador++;
    }
}        

// 8.