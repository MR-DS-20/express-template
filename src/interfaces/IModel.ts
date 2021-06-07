import { IPopulate } from "./IPopulate";
import mongoose = require('mongoose')
export interface IModel {
    mongooseModel: mongoose.Model<any>;
    create<T>(document: any): Promise<T>;
    find(populate?: IPopulate): Promise<any[]>;
    findById<T>(id: string, populate?: IPopulate): Promise<T>;
    findOne<T>(query: any, populate?: IPopulate): Promise<T>;
    findMany<T>(query: any, populate?: IPopulate): Promise<any[] |T>;
    updateById<T>(id: string, document: any, populate?: IPopulate | IPopulate[]): Promise<T>;
    deleteById<T>(id: string): Promise<T>;
}