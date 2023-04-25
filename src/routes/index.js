import { Router } from "express";
import courseRoutes from "./course/course.routes.js";
import studentRoutes from "./student/student.routes.js";
import subjectRoutes from "./subject/subject.routes.js";
import teacherRoutes from "./teacher/teacher.routes.js";

const routes = Router() // aqui asignamos todos los metodos de Router

// A continuacion van a estar viviendo todos los verbos de course, student, subject y teacher, separados.
routes.use("/course", courseRoutes)
routes.use("/student", studentRoutes)
routes.use("/subject", subjectRoutes)
routes.use("/teacher", teacherRoutes)

export default routes