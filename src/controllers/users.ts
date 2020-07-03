import { Request, Response } from "express";

export class UsersController {
  public all(req: Request, res: Response) {
    res.json([{
      name: "yassine"
    },{
      name: "houssine"
    }]);
  }
  public first(req: Request, res: Response) {
    res.json({
        name: "yassine"
    });
  }
}

export class UsersRoutes {

    public controller: UsersController = new UsersController();
  
    public routes(router: any) {
        router.route("/all").get(this.controller.all);
        router.route("/first").get(this.controller.first);
        return router;
    }
}