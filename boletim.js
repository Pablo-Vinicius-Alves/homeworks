let professor = true;

console.log("Se você for um professor, insira o número do seu crachá.");
console.log("-----------------------------------------------");

let nomeAlunos = {
    nome: ["Marcos", "Jefersson", "Erica"],
    idade: [15, 16, 16]
};

let posicao = -1;

function escolherAluno() {
    for (nome of nomeAlunos.nome) {
        posicao++;
        console.log(posicao, nome,);
    }
}

let alunoNotas = [4, 7, 8, 7, 9];

let somaArray = 0;
function somaMedia() {
    for (let i = 0; i < alunoNotas.length; i++) {
        console.log(alunoNotas[i]);
        somaArray += alunoNotas[i];
    }
}

let mediaTotal = 0;

function calculoMedia() {
    mediaTotal = (somaArray / alunoNotas.length);
    if (mediaTotal >= 7) {
        console.log(`Sua média final é: ${mediaTotal} - Aprovado`);
    }
    else {
        console.log(`Sua média final é: ${mediaTotal} - Reprovado`);
    }
}

let contador = 0;

function quantMedia() {
    for (let i = 0; i < alunoNotas.length; i++) {
        if (alunoNotas[i] >= mediaTotal) {
            contador++;
        }
    }
}

let maiorNota = alunoNotas[0];
let menorNota = alunoNotas[0];

function maiorMenor() {
    for (let i = 0; i < alunoNotas.length; i++) {
        if (alunoNotas[i] > maiorNota) {
            maiorNota = alunoNotas[i];
        }
        if (alunoNotas[i] < menorNota) {
            menorNota = alunoNotas[i];
        }
    }
}

while (professor == true) {
    escolherAluno();
    let escolhaAluno = "Marcos"
    console.log(`Qual aluno deseja entar no boletim? - ${escolhaAluno}`);
    console.log("------------------------------------------------");
    console.log(`As notas do ${escolhaAluno} foram:`);
    somaMedia();
    console.log(`Soma - ${somaArray}`);
    calculoMedia();
    quantMedia();
    console.log(`O aluno ficou com ${contador} notas acima da média.`);
    maiorMenor();
    console.log(`Maior nota - ${maiorNota}`);
    console.log(`Menor nota - ${menorNota}`);
    break;
}
