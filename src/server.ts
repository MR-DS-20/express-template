require("dotenv").config();
import { env } from "./environment/env";
const port: number = env().port;
import { App } from "./application";
import { middleware } from "./middleware";
const dbConString = env().db.uri(env().db.user, env().db.pw, env().db.name)

/**
 * Configure App instance
 */
const app = new App(port, middleware, []);

/**
 * Set up database credentials
 */
app.mongoDB(dbConString);

/**
 * Launch!
 */
app.listen();
