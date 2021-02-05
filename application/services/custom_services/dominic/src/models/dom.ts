
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const domSchema = new Schema({
   titleid: String,
   title: String,
   description: String
})

const domModel = mongoose.model('dom', domSchema, 'dom');
export default domModel;
