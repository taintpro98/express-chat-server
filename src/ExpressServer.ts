import cors from "cors";
import express from "express";
import helmet from "helmet";
import { RegisterRoutes } from "./routes/routes";

export default class ExpressServer {
  private app: express.Application;
  private readonly port: number;

  constructor(port: number){
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(helmet());
  }

  private initializeRoutes(){
    RegisterRoutes(this.app);
  }

  public start() {
    const server = this.app.listen(this.port, () => {
      console.log(`Express server listen at ${JSON.stringify(server.address())}`);
    })
  }
}