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

export default function (valor: number | string): string {
  const numeroString = (typeof valor === "string") ? valor : valor.toString();

  const negativo = (numeroString[0] === "-");
  const numeroPositivo = parseInt(numeroString.replace("-", ""));

  let extenso;

  if (numeroPositivo < 10) extenso = menor10(numeroPositivo);
  else extenso = "";

  return negativo && extenso ? "menos " + extenso : extenso;
}
