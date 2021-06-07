import { Schema } from "mongoose";
import mongoose = require('mongoose')

import { IModel } from "../interfaces/IModel";
import { BaseModel } from "./base.model";


const ExampleSchema: Schema = new Schema({
    title: { type: String },
    date_created: { type: Number },
    date_modified: { type: Number },
    order: { type: Number, default: 0 },
    hide: { type: Boolean, default: false }
});

export class ExampleModel extends BaseModel implements IModel {
    constructor() {
        super(
            mongoose.model<ExampleModel>('Example', ExampleSchema)
        )
    }

}
