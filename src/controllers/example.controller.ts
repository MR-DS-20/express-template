import mongoose = require("mongoose");
import { BaseController } from "./base.controller";
import { Response, Request } from "express";
import { ExampleModel } from "../models/example.model";
import { ExampleDoc } from "../interfaces/example.interface";

export class ExampleController extends BaseController {
  constructor() {
    super(new ExampleModel());
  }

  createFunction(req: Request, res: Response) {
    // Add some conditional logic...
    this.create(res, req.body);
  }

  async putFunction(req: Request, res: Response){
    // const doc = await this.model.findById(req.params.id)
    // doc
  }
}
