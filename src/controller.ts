import { Request, Response } from "express";
import extenso from "extenso";
import validatejs from "validate.js";

export class Controller {
  private readonly validate: any;

  constructor () {
    this.validate = {
      valor: {
        numericality: {
          greaterThanOrEqualTo: -99999,
          lessThanOrEqualTo: 99999,
          onlyInteger: true,
          notGreaterThanOrEqualTo: "^O valor deve ser maior ou igual a %{count}",
          notLessThanOrEqualTo: "^O valor deve ser menor ou igual a %{count}",
          notInteger: "^Deve ser informado apenas números inteiros!",
          notValid: "^Apenas números serão aceitos!"
        }
      }
    };
  }

  extenso (req: Request, res: Response): Response {
    const errors = validatejs(req.params, this.validate, { format: "flat" });

    if (errors) return res.status(500).json({ errors });

    return res.json({ extenso: extenso(req.params.valor, { negative: "informal" }) });
  }
}

export default Controller;
