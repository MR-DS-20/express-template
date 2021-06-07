//express imports
import express = require('express');
export const routerTemplate = express.Router();

//controllers
import { exampleController } from "./../controllers/controllers.module";

//Routes
routerTemplate.post('/content', (req, res) => { exampleController.exampleApiFunction(req,res)})
routerTemplate.put('/content/:id', (req, res) => {  })
routerTemplate.delete('/content/:id', (req, res) => { })
routerTemplate.get('/content/:id', (req, res) => { })

