//Funções que retornam objeto sem precisar chamá-las com o new
//podem receber parâmetros ou não

// Sem parâmetros:
function Pessoa(){
    return {
        name: 'Rebecca',
        lastName: 'Manzi'
    }
}

const p1 = Pessoa();
console.log(p1);
// { name: 'Rebecca', lastName: 'Manzi' } ------------------------------


// Com parâmetros:
function Pessoa2(name){
    return {
        name,
        lastName: 'Manzi'
    }
}

const p2 = Pessoa2('Custom Name');
console.log(p2);
// { name: 'Custom Name', lastName: 'Manzi' } ------------------------------


// Adicionando novos parâmetros
function Pessoa3(customProperties){
    return {
        name: 'Rebecca',
        lastName: 'Manzi',
        ...customProperties //permite adicionar novas propriedades  
    }
}

const p3 = Pessoa3({name: 'Custom Name', age: 27});
console.log(p3);
// { name: 'Custom Name', lastName: 'Manzi', age: 27 } ------------------------------