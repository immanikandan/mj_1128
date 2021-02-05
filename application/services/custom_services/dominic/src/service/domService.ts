import { Request, Response } from 'express';
import {domDao} from '../dao/domDao';
import { CustomLogger } from '../config/Logger'
let dom = new domDao();

export class domService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into domService.ts: GpCreate')
     const  domData = req.body;
     dom.GpCreate(domData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from domService.ts: GpCreate')
         callback(response);
         });
    }


}