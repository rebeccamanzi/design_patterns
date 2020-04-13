// Organiza melhor o código sem a necessidade de expor variáveis globais
// export e import
// separa os arquivos de acordo com a responsabilidade

let name = 'default';

function getName() {
    return name;
}

function setName(newName){
    name =  newName;
}

module.exports = {
    getName,
    setName
};
