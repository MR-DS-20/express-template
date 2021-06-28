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

  async putFunction(req: Request, res: Response) {
    try {
      const doc = await this.model.findById<ExampleDoc>(req.params.id);
      doc.title = req.body.title;
      doc.set("details.name", req.body.details.name);
      await doc.save();
      this.jsonRes(doc, res);
    } catch (e) {
      this.errRes(e, res, "Failed");
    }
  }
}
