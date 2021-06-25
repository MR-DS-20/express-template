// require("dotenv").config();
import { env } from "./environment/env";
const port: number = env().port;
import { App } from "./application";
import { middleware } from "./middleware";
import { routerTemplate } from "./routes/template.router";
const dbConString = env().db.uri(env().db.user, env().db.pw, env().db.name, env().db.account)

/**
 * Configure App instance
 */
const app = new App(
    port, 
    middleware, 
    [routerTemplate] //* Add your express router objects here
    );

/**
 * Set up database credentials
 */
app.mongoDB(dbConString);

/**
 * Launch!
 */
app.listen();
