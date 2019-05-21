import { expect } from "chai";
import axios from "../axios";

describe("números inteiros com quatro ou cinco casas", function () {
  it("número 1000", async function () {
    let resposta;

    try {
      resposta = await axios.get("/1000");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("mil");
  });

  it("número 8300", async function () {
    let resposta;

    try {
      resposta = await axios.get("/8300");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("oito mil e trezentos");
  });

  it("número -31937", async function () {
    let resposta;

    try {
      resposta = await axios.get("/-31937");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("menos trinta e um mil novecentos e trinta e sete");
  });

  it("número 50000", async function () {
    let resposta;

    try {
      resposta = await axios.get("/50000");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("cinquenta mil");
  });

  it("número -70000", async function () {
    let resposta;

    try {
      resposta = await axios.get("/-70000");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("menos setenta mil");
  });

  it("número 99999", async function () {
    let resposta;

    try {
      resposta = await axios.get("/99999");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("noventa e nove mil novecentos e noventa e nove");
  });

  it("número -99999", async function () {
    let resposta;

    try {
      resposta = await axios.get("/-99999");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("menos noventa e nove mil novecentos e noventa e nove");
  });
});
