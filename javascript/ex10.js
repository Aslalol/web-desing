let alunos = [
    {"nome": "Asla", "idade": 12, "curso": "eng comp", "matricula": 248341},
    {"nome": "Amanda", "idade": 50, "curso": "eng comp", "matricula": 248342},
    {"nome": "José", "idade": 21, "curso": "eng elet", "matricula": 248343},
    {"nome": "Samuel", "idade": 15, "curso": "eng meca", "matricula": 248344}
];

let AlunoMaior = (Alunosvelhos) => {
    return Alunosvelhos.filter(aluno => aluno.idade > 18); 
};

let alunosMai = AlunoMaior(alunos);
console.log(alunosMai); 
