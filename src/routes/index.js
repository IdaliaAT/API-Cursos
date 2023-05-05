import { Router } from "express";
import courseRoutes from "./course/course.routes.js";
import subjectRoutes from "./subject/subject.routes.js";


const routes = Router() // aqui asignamos todos los metodos de Router

// A continuacion van a estar viviendo todos los verbos de course, student, subject y teacher, separados.
routes.use("/course", courseRoutes)
routes.use("/subject", subjectRoutes)


export default routes