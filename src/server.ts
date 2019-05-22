import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import Controller from "./controller";

const envResult = dotenv.config();

if (envResult.error) throw new Error("Failed to load .env file!");

const server = express();

server.use(compression());
server.use(cors());
server.use(helmet());

const controller = new Controller();

server.get("/:valor", controller.extenso.bind(controller));

server.get("/v2/:valor", controller.extensoV2.bind(controller));

export default server;
