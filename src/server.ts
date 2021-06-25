// require("dotenv").config();
import { env } from "./environment/env";
const port: number = env().port ?? 8080;
import { App } from "./application";
import { middleware } from "./middleware";
import { routerTemplate } from "./routes/template.router";
let dbConString
try {
    dbConString = env().db.uri(env().db.user, env().db.pw, env().db.name, env().db.account)
} catch {
    console.log('Faild to create DB Connection string')
}

/**
 * Configure App instance
 */
const app = new App(
    port,
    middleware,
    [routerTemplate] //* Add your express router objects here
);

/**
 * Connect to MongoDB
 */
dbConString ? app.mongoDB(dbConString) : console.log('Not Starting MongoDB Connection');

/**
 * Launch!
 */
app.listen();
