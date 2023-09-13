const alunosNotas = [
    {
        nome:"João",
        nota:10
    },
    {
        nome:"Bia",
        nota:8
    },
    {
        nome:"Maria",
        nota:4
    },
    {
        nome:"Italo",
        nota:7
    },
    {
        nome:"Giovanna",
        nota:5
    },
    {
        nome:"Ruy",
        nota:6
    },
];
function aprovação(alunosNotas){
    return alunosNotas.filter(function(aluno){
        return aluno.nota > 5
    })
}

const alunosAprovado = aprovação(alunosNotas)
console.log(alunosAprovado)



