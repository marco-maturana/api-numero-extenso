import { expect } from "chai";
import axios from "../axios";

describe("numeros inválidos", function () {
  it("número menor que -99999", async function () {
    let resposta;

    try {
      resposta = await axios.get("/-100000");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(500);
    expect(resposta.data.errors).to.include("O valor deve ser maior ou igual a -99999");
  });

  it("número maior que 99999", async function () {
    let resposta;

    try {
      resposta = await axios.get("/100000");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(500);
    expect(resposta.data.errors).to.include("O valor deve ser menor ou igual a 99999");
  });

  it("número maior que 99999", async function () {
    let resposta;

    try {
      resposta = await axios.get("/100000");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(500);
    expect(resposta.data.errors).to.include("O valor deve ser menor ou igual a 99999");
  });

  it("número decimal", async function () {
    let resposta;

    try {
      resposta = await axios.get("/1000.32");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(500);
    expect(resposta.data.errors).to.include("Deve ser informado apenas números inteiros!");
  });

  it("valor monetário", async function () {
    let resposta;

    try {
      resposta = await axios.get("/1000,32");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(500);
    expect(resposta.data.errors).to.include("Apenas números serão aceitos!");
  });
});
