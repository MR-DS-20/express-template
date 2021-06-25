//express imports
import express = require('express');
export const routerTemplate = express.Router();

//controllers
import { exampleController } from "../controllers/controllers.module";

// Set the common part of the path for the routes in this router
const base = '/content'

//Routes
routerTemplate.post(`${base}`, (req, res) => { exampleController.exampleApiFunction(req,res)})
routerTemplate.put(`${base}/:id`, (req, res) => {  })
routerTemplate.delete(`${base}/:id`, (req, res) => { })
routerTemplate.get(`${base}/:id`, (req, res) => { })

