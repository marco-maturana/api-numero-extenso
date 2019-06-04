export interface TipoDadosTeste {
  centena: { valor: number, extenso: string }[ ];
  dezena: { valor: number, extenso: string }[ ];
  milhar: { valor: number, extenso: string }[ ];
  milharExtensoJs: { valor: number, extenso: string }[ ];
  unidade: { valor: number, extenso: string }[ ];
}

const milhar = [
  {
    valor: -70000,
    extenso: "menos setenta mil"
  },
  {
    valor: 1000,
    extenso: "mil"
  },
  {
    valor: 8300,
    extenso: "oito mil e trezentos"
  },
  {
    valor: 50000,
    extenso: "cinquenta mil"
  }
];

const data: TipoDadosTeste = {
  centena: [
    {
      valor: -999,
      extenso: "menos novecentos e noventa e nove"
    },
    {
      valor: -175,
      extenso: "menos cento e setenta e cinco"
    },
    {
      valor: 100,
      extenso: "cem"
    },
    {
      valor: 246,
      extenso: "duzentos e quarenta e seis"
    },
    {
      valor: 500,
      extenso: "quinhentos"
    }
  ],
  dezena: [
    {
      valor: -99,
      extenso: "menos noventa e nove"
    },
    {
      valor: -10,
      extenso: "menos dez"
    },
    {
      valor: 20,
      extenso: "vinte"
    },
    {
      valor: 47,
      extenso: "quarenta e sete"
    },
    {
      valor: 53,
      extenso: "cinquenta e três"
    }
  ],
  milhar: [
    ...milhar,
    {
      valor: -99999,
      extenso: "menos noventa e nove mil e novecentos e noventa e nove"
    },
    {
      valor: -31937,
      extenso: "menos trinta e um mil e novecentos e trinta e sete"
    },
    {
      valor: 45227,
      extenso: "quarenta e cinco mil e duzentos e vinte e sete"
    },
    {
      valor: 99999,
      extenso: "noventa e nove mil e novecentos e noventa e nove"
    }
  ],
  milharExtensoJs: [
    ...milhar,
    {
      valor: -99999,
      extenso: "menos noventa e nove mil novecentos e noventa e nove"
    },
    {
      valor: -31937,
      extenso: "menos trinta e um mil novecentos e trinta e sete"
    },
    {
      valor: 45227,
      extenso: "quarenta e cinco mil duzentos e vinte e sete"
    },
    {
      valor: 99999,
      extenso: "noventa e nove mil novecentos e noventa e nove"
    }
  ],
  unidade: [
    {
      valor: -9,
      extenso: "menos nove"
    },
    {
      valor: -5,
      extenso: "menos cinco"
    },
    {
      valor: 0,
      extenso: "zero"
    },
    {
      valor: 1,
      extenso: "um"
    },
    {
      valor: 9,
      extenso: "nove"
    }
   ]
};

export default function (tipos: keyof TipoDadosTeste): { valor: number, extenso: string } {
  const arrayTipo = data[tipos];

  return arrayTipo[Math.floor(Math.random() * arrayTipo.length)];
}
