const alunos = ['gustavo','pedro','lucio','breno','julia','maria','breno','sabrina']

const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        nota: 5 ,
        curso: 'front-end'
    }
    return itemAtual;
})

alunos2.push({
    nome:'felipe',
    nota:7 ,
    curso:'front-end'
})
alunos.push({
    nome:'rafael',
    nota:8 ,
    curso:'front-end'
})
alunos2.push({
    nome:'renata',
    nota:9 ,
    curso:'front-end'
})
alunos2.push({
    nome:'maria',
    nota:6 ,
    curso:'front-end'
})
const alunosDez = alunos2.filter(function(item){
    return item.nota >= 6;
})
console.log(alunos2)
console.log(alunosDez)

