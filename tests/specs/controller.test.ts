import { expect } from "chai";
import { random } from "faker";
import axios from "../axios";
import { dadosExtenso, dadosMonetario } from "../dados-teste";

describe("utilizando algoritmo da biblioteca extenso.js", function () {
  describe("numeros inválidos", function () {
    it("número menor que -99999", async function () {
      let resposta;

      try {
        resposta = await axios.get("/" + random.number({
          min: -1000000,
          max: -100000
        }));
      } catch (error) {
        resposta = error.response;
      }

      expect(resposta.status).to.equal(400);
      expect(resposta.data.errors).to.include("O valor deve ser maior ou igual a -99999");
    });

    it("número maior que 99999", async function () {
      let resposta;

      try {
        resposta = await axios.get("/" + random.number({
          min: 100000,
          max: 1000000
        }));
      } catch (error) {
        resposta = error.response;
      }

      expect(resposta.status).to.equal(400);
      expect(resposta.data.errors).to.include("O valor deve ser menor ou igual a 99999");
    });

    it("número decimal", async function () {
      let resposta;

      try {
        resposta = await axios.get("/" + random.number({
          min: -99999,
          max: 9999,
          precision: 0.01
        }));
      } catch (error) {
        resposta = error.response;
      }

      expect(resposta.status).to.equal(400);
      expect(resposta.data.errors).to.include("Deve ser informado apenas números inteiros!");
    });

    it("valor monetário", async function () {
      let resposta;

      try {
        resposta = await axios.get(`/${dadosMonetario()}`);
      } catch (error) {
        resposta = error.response;
      }

      expect(resposta.status).to.equal(400);
      expect(resposta.data.errors).to.include("Apenas números serão aceitos!");
    });
  });

  it("números inteiros com apenas uma casa", async function () {
    const valorTeste = dadosExtenso("unidade");

    let resposta;

    try {
      resposta = await axios.get(`/${valorTeste.valor}`);
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal(valorTeste.extenso);
  });

  it("números inteiros com duas casas", async function () {
    const valorTeste = dadosExtenso("dezena");

    let resposta;

    try {
      resposta = await axios.get(`/${valorTeste.valor}`);
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal(valorTeste.extenso);
  });

  it("números inteiros com três casas", async function () {
    const valorTeste = dadosExtenso("centena");

    let resposta;

    try {
      resposta = await axios.get(`/${valorTeste.valor}`);
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal(valorTeste.extenso);
  });

  it("números inteiros com quatro ou cinco casas", async function () {
    const valorTeste = dadosExtenso("milharExtensoJs");

    let resposta;

    try {
      resposta = await axios.get(`/${valorTeste.valor}`);
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal(valorTeste.extenso);
  });
});

describe("utilizando o próprio algoritmo", function () {
  describe("numeros inválidos", function () {
    it("número menor que -99999", async function () {
      let resposta;

      try {
        resposta = await axios.get("/v2/" + random.number({
          min: -1000000,
          max: -100000
        }));
      } catch (error) {
        resposta = error.response;
      }

      expect(resposta.status).to.equal(400);
      expect(resposta.data.errors).to.include("O valor deve ser maior ou igual a -99999");
    });

    it("número maior que 99999", async function () {
      let resposta;

      try {
        resposta = await axios.get("/v2/" + random.number({
          min: 100000,
          max: 1000000
        }));
      } catch (error) {
        resposta = error.response;
      }

      expect(resposta.status).to.equal(400);
      expect(resposta.data.errors).to.include("O valor deve ser menor ou igual a 99999");
    });

    it("número decimal", async function () {
      let resposta;

      try {
        resposta = await axios.get("/v2/" + random.number({
          min: -99999,
          max: 9999,
          precision: 0.01
        }));
      } catch (error) {
        resposta = error.response;
      }

      expect(resposta.status).to.equal(400);
      expect(resposta.data.errors).to.include("Deve ser informado apenas números inteiros!");
    });

    it("valor monetário", async function () {
      let resposta;

      try {
        resposta = await axios.get(`/v2/${dadosMonetario()}`);
      } catch (error) {
        resposta = error.response;
      }

      expect(resposta.status).to.equal(400);
      expect(resposta.data.errors).to.include("Apenas números serão aceitos!");
    });
  });

  it("números inteiros com apenas uma casa", async function () {
    const valorTeste = dadosExtenso("unidade");

    let resposta;

    try {
      resposta = await axios.get(`/v2/${valorTeste.valor}`);
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal(valorTeste.extenso);
  });

  it("números inteiros com duas casas", async function () {
    const valorTeste = dadosExtenso("dezena");

    let resposta;

    try {
      resposta = await axios.get(`/v2/${valorTeste.valor}`);
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal(valorTeste.extenso);
  });

  it("números inteiros com três casas", async function () {
    const valorTeste = dadosExtenso("centena");

    let resposta;

    try {
      resposta = await axios.get(`/v2/${valorTeste.valor}`);
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal(valorTeste.extenso);
  });

  it("números inteiros com quatro ou cinco casas", async function () {
    const valorTeste = dadosExtenso("milhar");

    let resposta;

    try {
      resposta = await axios.get(`/v2/${valorTeste.valor}`);
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal(valorTeste.extenso);
  });
});
