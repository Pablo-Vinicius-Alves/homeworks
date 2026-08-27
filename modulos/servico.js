import Heroi from "./herois.js"; 
import { paraMaiusculo, formatarOuro } from "./herois.js";

export function criarHeroiFormatado(nome, classe, nivel) {
  const heroi = new Heroi(paraMaiusculo(nome), classe, nivel);
  return heroi;
}

export function calcularRecompensa(dificuldade) {
  const tabela = { facil: 50, media: 150, dificil: 400 };
  const valor = tabela[dificuldade] ?? 50;
  return formatarOuro(valor);
}

console.log(`Sistema de heróis ---------`);

const heroi = criarHeroiFormatado('Tardin',  'guerreiro', 8);
console.log(heroi.nome,'--', heroi.descricao());

console.log('Recompensa da missão:', calcularRecompensa('dificil'));
