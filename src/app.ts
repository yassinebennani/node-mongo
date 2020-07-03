import * as express from "express";
import * as bodyParser from "body-parser";
import { UsersRoutes } from "./controllers/users";

class App {
  public app: express.Application;
  public users: UsersRoutes = new UsersRoutes();

  constructor() {
    this.app = express();
    this.start();
  }

  private start(): void {
   this.configure();
   this.build();
  }

  private configure(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private build(): void {
    this.app.use('/users', this.users.routes(express.Router()))
  }
}

export default new App().app;