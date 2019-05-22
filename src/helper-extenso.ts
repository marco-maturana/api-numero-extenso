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

export default function (valor: number | string): string {
  const numeroString = (typeof valor === "string") ? valor : valor.toString();

  const negativo = (numeroString[0] === "-");
  const numeroPositivo = parseInt(numeroString.replace("-", ""));

  let extenso;

  if (numeroPositivo < 10) extenso = menor10(numeroPositivo);
  else if (numeroPositivo < 100) extenso = menor100(numeroPositivo);
  else extenso = "";

  return negativo && extenso ? "menos " + extenso : extenso;
}
