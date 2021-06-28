//express imports
import express = require('express');
export const routerTemplate = express.Router();

//controllers
import { exampleController } from "../controllers/controllers.module";

// Set the common part of the path for the routes in this router
const base = '/example-path'

//Routes
routerTemplate.post(`${base}`, (req, res) => { exampleController.createFunction(req,res)})
routerTemplate.put(`${base}/:id`, (req, res) => { exampleController.putFunction(req, res) })
routerTemplate.delete(`${base}/:id`, (req, res) => { exampleController.deleteById(res, req.params.id)})
routerTemplate.get(`${base}/:id`, (req, res) => { exampleController.findById(res, req.params.id)})

