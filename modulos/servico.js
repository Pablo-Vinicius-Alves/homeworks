import Heroi, { paraMaiusculo, formatarOuro, TABELA_RECOMPENSAS } from "./herois.js";

export function criarHeroiFormatado(nome, classe, nivel) {
  return new Heroi(paraMaiusculo(nome), classe, nivel);
}

export function calcularRecompensa(dificuldade) {
  const valor = TABELA_RECOMPENSAS[dificuldade] ?? TABELA_RECOMPENSAS.facil;
  return formatarOuro(valor);
}

console.log("Sistema de heróis ---------");

const heroi = criarHeroiFormatado("Thors", "guerreiro", 15);
console.log(heroi.nome, "-", heroi.descricao());

console.log("Recompensa da missão:", calcularRecompensa("dificil"));
