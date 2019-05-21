import { expect } from "chai";
import axios from "../axios";

describe("números inteiros com três casas", function () {
  it("número 100", async function () {
    let resposta;

    try {
      resposta = await axios.get("/100");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("cem");
  });

  it("número 500", async function () {
    let resposta;

    try {
      resposta = await axios.get("/500");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("quinhentos");
  });

  it("número -999", async function () {
    let resposta;

    try {
      resposta = await axios.get("/-999");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("menos novecentos e noventa e nove");
  });

  it("número -175", async function () {
    let resposta;

    try {
      resposta = await axios.get("/-175");

    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("menos cento e setenta e cinco");
  });
});
