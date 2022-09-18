import ExpressServer from "./ExpressServer";
import * as dotenv from "dotenv";

dotenv.config();
if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

function init(){
  const expressServer = new ExpressServer(PORT);
  expressServer.start();
}

init();