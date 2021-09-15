const ListaDePecas = ['Peca1', 'Peca2', 'Peca3']

console.log('quantidade de peças')

if(ListaDePecas.lenghth <=10) {
    console.log('as peças podem ser cadastradas');
}

console.log('quantidade de caracteres')

for (let index =0; index < ListaDePecas.length; index++) {
    const pecaAtual = ListaDePecas[index];
    if (pecaAtual.length <3){
        console.log(pecaAtual +': a peça possui nome inferior a 3 caracteres e não pode ser cadatrada.')
    }else {
        console.log(pecaAtual +': a peça pode ser cadastrada')
    }
}

console.log('peso da peça')

const pesoDaPecaEmGramas =101;

if (pesoDaPecaEmGramas >=100) {
    console.log('peso suficiente.')
}else {
    console.log('valor insuficiente')
}
