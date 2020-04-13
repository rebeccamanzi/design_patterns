/*Recebe outra função como parametro e estende o seu comportamento sem modificar 
explicitamente. 'Controla' a execução. É possível utilizar através de TypeScript.
No Angular -> @Component
*/

// criando no javascript (sem a sintaxe de decorator):

let loggedIn = false; 
//iniciando sem estar logado

//controlar uma função para executar apenas se o usuario estiver autenticado: 
function callIfAuthenticated(fn) {
    return !!loggedIn && fn();
    //retorna se o usuario está logado e o resultado da função q recebeu de parametro
}

function sum (a, b) {
    return a + b;
}

//criando o decorator:
console.log(callIfAuthenticated(() => sum(2,3)));
// false

loggedIn = true;
console.log(callIfAuthenticated(() => sum(2,3)));
// 5

loggedIn = false;
console.log(callIfAuthenticated(() => sum(2,3)));
// false