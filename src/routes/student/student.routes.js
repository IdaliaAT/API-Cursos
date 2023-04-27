import { Router } from "express";
import StudentController from "../../controllers/student/Student.controller.js";

const studentRoutes = Router()
studentRoutes.get("/", StudentController.getAllStudents)
studentRoutes.get("/:id", StudentController.getStudentById)
studentRoutes.get("/name/:name", StudentController.getStudentByName)
    /*studentRoutes.get("/name/:name", (req, res) => {
        const { name } = req.params
        res.status(200).send(`Este es el estudiante ${name}`)
    })*/
studentRoutes.post("/", StudentController.createStudent)
studentRoutes.delete("/:id", StudentController.deleteStudent)
studentRoutes.put("/:id", StudentController.updateStudent)

export default studentRoutes