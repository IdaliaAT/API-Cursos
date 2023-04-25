import { Router } from "express";
import StudentController from "../../controllers/student/Student.controller.js";

const studentRoutes = Router()
studentRoutes.get("/", StudentController.getAllStudents)
studentRoutes.get("/:id", StudentController.getStudentById)
studentRoutes.post("/", StudentController.createStudent)
studentRoutes.delete("/:id", StudentController.deleteStudent)
studentRoutes.put("/:id", StudentController.updateStudent)

export default studentRoutes