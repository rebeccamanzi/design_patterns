const {getName, setName} = require('./module');

console.log(getName());
//default  

console.log(setName('Rebecca'));
//undefined (foi alterado)

console.log(getName());
//Rebecca