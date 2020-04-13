/* A instância (subscriber) mantém uma coleção de objetos (observers) e 
notifica todos eles quando ocorrem mudanças no estado.
Vue -> função notify()
RxJs (biblioteca) -> implementação (tb tem no Angular)
*/

class Observable {
    constructor() {
        this.observables = [];
    }

    subscribe(fn) {
        this.observables.push(fn);
        //add uma função às observadas
    }

    notify(data) {
        this.observables.forEach(fn => fn(data));
        //notifica todas as funções observadas
    }

    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
        //retirar uma função das observadas
    }
}

const o = new Observable(); 

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

//adicionando funções à observer 'o'
o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');
/* todos irão receber a notificação 'notified 1':
Subscribe 1: notified 1
Subscribe 2: notified 1
Subscribe 3: notified 1
*/

o.unsubscribe(logData2);
//retirando logData2 de observer 'o'

o.notify('notified 2');
/* apenas logData1 e logData3 receberão a notificação 'notified 2':
Subscribe 1: notified 2
Subscribe 3: notified 2
*/
