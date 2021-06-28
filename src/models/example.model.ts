/**
 * This page demonstrates how to use interfaces, Models and schmas to effectivley interact with MongoDB
 */

import { Schema } from "mongoose";
import mongoose = require('mongoose')
import { BaseModel } from "./base.model";

const NestedSchema = new Schema({
    name: {type: String}
})

/*
 * Create the schmema that will reflect the MongoDB collection
 */
const ExampleSchema: Schema = new Schema({
    title: { type: String },
    date_created: { type: Number },
    date_modified: { type: Number },
    order: { type: Number, default: 0 },
    hide: { type: Boolean, default: false },
    details: NestedSchema
});

/*
 * Use this model class to have acess to common CRUD features 
 */
export class ExampleModel extends BaseModel {
    constructor() {
        super(
            mongoose.model('Example', ExampleSchema)
        )
    }

}
