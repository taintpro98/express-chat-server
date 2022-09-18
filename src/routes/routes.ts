import * as express from 'express';
import { AuthController } from '../controllers/AuthController';

const AuthControllerInstance = new AuthController();

export function RegisterRoutes(app: express.Router){
  app.post("/login", AuthControllerInstance.login);
}