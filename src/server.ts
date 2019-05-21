import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import helmet from "helmet";

const envResult = dotenv.config();

if (envResult.error) throw new Error("Failed to load .env file!");

const server = express();

server.use(compression());
server.use(cors());
server.use(helmet());

server.get("/", (_req: Request, res: Response): Response => {
  return res.json({ message: "ok" });
})

export default server;