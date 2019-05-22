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

export default function (valor: number | string): string {
  const numeroString = (typeof valor === "string") ? valor : valor.toString();

  const negativo = (numeroString[0] === "-");
  const numeroPositivo = parseInt(numeroString.replace("-", ""));

  let extenso;

  if (numeroPositivo < 10) extenso = menor10(numeroPositivo);
  else if (numeroPositivo < 100) extenso = menor100(numeroPositivo);
  else if (numeroPositivo < 1000) extenso = menor1000(numeroPositivo);
  else extenso = "";

  return negativo && extenso ? "menos " + extenso : extenso;
}
