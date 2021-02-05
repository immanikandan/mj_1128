import * as mongoose from 'mongoose';
import domModel from '../models/dom';
import { CustomLogger } from '../config/Logger'


export class domDao {
    private dom = domModel;
    constructor() { }
public GpCreate(domData, callback){
new CustomLogger().showLogger('info', 'Enter into domDao.ts: GpCreate')
let temp = new domModel(domData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from domDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}