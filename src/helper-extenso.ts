const centena = [
  "cento",
  "duzentos",
  "trezentos",
  "quatrocentos",
  "quinhentos",
  "seiscentos",
  "setecentos",
  "oitocentos",
  "novecentos"
];

const dezena = [
  "dez",
  "onze",
  "doze",
  "treze",
  "quatorze",
  "quinze",
  "dezesseis",
  "dezessete",
  "dezoito",
  "dezenove",
  "vinte",
  "trinta",
  "quarenta",
  "cinquenta",
  "sessenta",
  "setenta",
  "oitenta",
  "noventa"
];

const unidades = [
  "zero",
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove"
];

function menor10 (valor: number) {
  return unidades[valor];
}

function menor100 (valor: number): string {
  if (valor < 10) return menor10(valor);
  if (valor < 20) return dezena[valor - 10];

  const extensoUnidade = menor10(valor % 10);
  const extensoDezena = dezena[(valor - valor % 10) / 10 + 8];

  return extensoUnidade !== "zero"
    ? `${extensoDezena} e ${extensoUnidade}`
    : extensoDezena;
}

function menor1000 (valor: number): string {
  if (valor < 100) return menor100(valor);
  if (valor === 100) return "cem";

  const valorCentena = valor - valor % 100;
  const valorDezena = valor % 100;
  const extensoCentena = centena[valorCentena / 100 - 1];
  const extensoDezena = menor100(valorDezena);

  return valorDezena
    ? `${extensoCentena} e ${extensoDezena}`
    : extensoCentena;
}

function maior1000 (valor: number): string {
  const valorCentena = valor % 1000;
  const valorMilhar = valor - valorCentena;

  const extensoMilhar = menor1000(valorMilhar / 1000);

  let extenso = `${extensoMilhar} mil`;

  if (valorCentena > 0)  extenso += " e " + menor1000(valorCentena);

  return extenso;
}

export default function (valor: number | string): string {
  const numeroString = (typeof valor === "string") ? valor : valor.toString();

  const negativo = (numeroString[0] === "-");
  const numeroPositivo = parseInt(numeroString.replace("-", ""));

  if (numeroPositivo > 99999) throw new Error("Permitido apenas números entre -99999 e 99999!");

  let extenso;

  if (numeroPositivo < 1000) extenso = menor1000(numeroPositivo);
  else if (numeroPositivo === 1000) extenso = "mil";
  else extenso = maior1000(numeroPositivo);

  return negativo && extenso ? "menos " + extenso : extenso;
}
