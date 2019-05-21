import { expect } from "chai";
import axios from "../axios";

describe("números inteiros com apenas uma casa", function () {
  it("número 1", async function () {
    let resposta;

    try {
      resposta = await axios.get("/1");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("um");
  });

  it("número -9", async function () {
    let resposta;

    try {
      resposta = await axios.get("/-9");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("menos nove");
  });

  it("número -5", async function () {
    let resposta;

    try {
      resposta = await axios.get("/-5");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("menos cinco");
  });

  it("número 0", async function () {
    let resposta;

    try {
      resposta = await axios.get("/0");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("zero");
  });

  it("número 9", async function () {
    let resposta;

    try {
      resposta = await axios.get("/9");
    } catch (error) {
      resposta = error.response;
    }

    expect(resposta.status).to.equal(200);
    expect(resposta.data.extenso).to.equal("nove");
  });
});
