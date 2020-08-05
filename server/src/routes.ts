import express from "express";
import ClassesController from "./controllers/classesController";

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World!" });
});

//CRIAÇÃO DA AULA
const classesControllers = new ClassesController();
routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

export default routes;
