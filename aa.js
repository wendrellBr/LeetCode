const alunos = ["João", "Maria", "José", "Antônio", "Ana"];
const notas = [8, 7, 6, 10, 9];

const turma = [alunos, notas];

function buscaAluno(aluno, turma) {
  if (turma[0].includes(aluno)) {
    let indice = turma[0].indexOf(aluno);
    console.log("A nota de " + aluno + " é " + turma[1][indice]);
  } else {
    console.log("aluno não encontrado");
  }
}

buscaAluno("Antôni", turma);
