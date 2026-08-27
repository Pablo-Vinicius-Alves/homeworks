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
  return texto.toUpperCase();
}

export function formatarOuro(valor) {
  return `${valor} moedas de ouro`;
}