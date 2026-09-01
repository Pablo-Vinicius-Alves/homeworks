export default class Heroi {
  constructor(nome, classe, nivel) {
    this.nome = nome;
    this.classe = classe;
    this.nivel = nivel;
  }

  descricao() {
    return `${this.classe}, nível ${this.nivel}`;
  }
}

export function paraMaiusculo(texto) {
  if (typeof texto !== "string") {
    throw new TypeError("paraMaiusculo espera uma string");
  }
  return texto.toUpperCase();
}

export function formatarOuro(valor) {
  return `${valor.toLocaleString("pt-BR")} moedas de ouro`;
}

export const TABELA_RECOMPENSAS = { facil: 50, media: 150, dificil: 400 };