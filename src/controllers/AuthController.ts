import { Request, Response } from "express";

export class AuthController {
  async login(req: Request, res: Response){
    res.status(200).send("success");
  }
}