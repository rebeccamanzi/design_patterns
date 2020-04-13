//Cria 1 única instância de função construtora e retorna qnd precisar utilizá-la
//padrão popular -> jQuery

function Pessoa(){
    if (!Pessoa.instance) { //caso pessoa n tenha sido instanciada
        Pessoa.instance = this; //use essa instância
    }

    return Pessoa.instance; //senão, retorne a instância já existente
}

const p = Pessoa.call({ name:'Rebecca' });

const p2 = Pessoa.call({ name:'Custom Name' });

console.log(p);
// { name: 'Rebecca' }

console.log(p2);
// { name: 'Rebecca' }

// mesmo que tente instanciar com outro nome, o primeiro prevalece e não muda