# Express Template

This project is intended to be used as a boilerplate for creating Express API's or backend applications. The code is written in Typescript and uses and an opinionated, object oriented approach to development. It comes with features to interact with MongoDB using Mongoose. 

To get started run:
```bash
npm install
npm run build
npm run start:dev
```

## Files and Folders
---

### environment/

Complete the necessary parameters for your project. You must fill in the `db` section if using MongoDB. Files will be replaced depending on wether you run `npm run start:dev` or `npm run start:prod`.

---

### server.ts

Entry point for NodeJS to run the Express application. Use this file to create an App instance, connect to database and get the app to listn on provided port number. 

---

### middleware.ts

Use this file to build an array of middleware to be used at the app level (implemented with all routes) of your express application.

---
### routes/

Create a router file based on the template for each grouping of routes in your application. Add the exported express router to the array in the app instance object in the `server.ts` file

---
### controllers/

Create controller files for each grouping of functions the application performs. A good start would be a controller for each model in the database. 

#### base.controller.ts

This is an extendable class that expects you to use Mongoose/MongoDB and construct the models/schemas in the format used in the models folder. This base class provides commonly used CRUD functions for a very quick solution to developing CRUD APIs.

#### controllers.module.ts
Create instances of your controllers here, and you can then use it for simple imports of controllers into the routers

---

### models/

Create a model file for each model in your database. Use the `BaseModel` class to provide reusable CRUD funcitonality to each model to help stay DRY.


