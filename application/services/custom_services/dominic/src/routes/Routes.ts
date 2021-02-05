import { Request, Response, NextFunction } from "express";
import { domController } from '../controller/domController';


export class Routes {
    private dom: domController = new domController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/dom').post(this.dom.GpCreate);
     }

}