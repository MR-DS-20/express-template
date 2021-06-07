import mongoose = require("mongoose");

import { BaseController } from "./base.controller";
import { Response, Request } from "express";
import { ExampleModel } from "../models/example.model";


export class ExampleController extends BaseController {
  constructor() {
    super(new ExampleModel());
  }

  exampleApiFunction(req: Request, res: Response) {
    this.create(res,req.body);
}

  
}
