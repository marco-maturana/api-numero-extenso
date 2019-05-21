import { expect } from "chai";
import axios from "../axios";

describe("números inteiros com duas casas", function () {
  it("número -10", async function () {
    let resposta;

    try {
      resposta = await axios.get("/-10");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("menos dez");
  });

  it("número -99", async function () {
    let resposta;

    try {
      resposta = await axios.get("/-99");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("menos noventa e nove");
  });

  it("número 20", async function () {
    let resposta;

    try {
      resposta = await axios.get("/20");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("vinte");
  });

  it("número 53", async function () {
    let resposta;

    try {
      resposta = await axios.get("/53");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("cinquenta e três");
  });

  it("número 47", async function () {
    let resposta;

    try {
      resposta = await axios.get("/47");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("quarenta e sete");
  });
});
