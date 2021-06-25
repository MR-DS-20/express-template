import { env } from "./environment/env";
import { Application } from "express";
import express = require("express");
import mongoose = require("mongoose");

/**
 * Primary Class that constructs all of the parts of the Express server
 */
export class App {
  public app: Application;

  /**
   * Base path for all routes routes. Defaults to '/api'. set process.env.API_PATH to change
   */
  public apiPath = "/api";

  constructor(
    private port: number,
    middleware: Array<any>,
    routes: Array<express.Router>,
    private staticPath: string = "public"
  ) {
    this.app = express();

    this.port = port;

    this.middleware(middleware);

    this.routes(routes);

    this.assets();

    if (process.env.API_PATH) {
      this.apiPath = process.env.API_PATH;
    }

    if (env().staticPath) {
      this.staticPath = env().staticPath;
    }
  }

  /**
   * @param mware Array of middlewares to be loaded into express app
   */
  private middleware(mware: any[]) {
    mware.forEach((m) => {
      this.app.use(m);
    });
  }

  public addMiddleWare(middleWare: any) {
    this.app.use(middleWare);
  }

  /**
   * Attaches route objects to app, appending routes to `apiPath`
   * @param routes Array of router objects to be attached to the app
   */
  private routes(routes: Array<express.Router>) {
    routes.forEach((r) => {
      this.app.use(`${this.apiPath}`, r);
    });
  }

  /**
   * Enable express to serve up static assets
   */
  private assets() {
    this.app.use(express.static(this.staticPath));
  }

  /**
   * Creates a connection to a MongoDB instance using mongoose
   * @param uri MongoDB connection string
   */
  public mongoDB(uri: string) {
    const connect = () => {
      mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          return;
        })
        .catch((error) => {
          console.log("DATABASE CONNECTION FAILED \n", error);
          return process.exit(1);
        });
    };
    connect();

    mongoose.connection.on("disconnected", connect);
  }

  /**
   * Start the Express app
   */
  public listen() {
    this.app.listen(this.port, () => {
      console.log("APP LISTENING ON PORT:", this.port);
    });
  }
}
