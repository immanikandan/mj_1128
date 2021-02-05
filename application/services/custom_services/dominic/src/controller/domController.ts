import { Request, Response } from 'express';
import { domService } from '../service/domService';
import { CustomLogger } from '../config/Logger'
let dom = new domService();

export class domController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
dom.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into domController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from domController.ts: GpCreate');
    })}


}