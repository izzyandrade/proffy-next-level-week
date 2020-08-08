import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World!" });
});

//CLASSES
const classesControllers = new ClassesController();
routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

//CONNECTIONS
const connectionsControllers = new ConnectionsController();
routes.get("/connections", connectionsControllers.index);
routes.post("/connections", connectionsControllers.create);

export default routes;
