import { Router } from "express";
import TeacherController from "../../controllers/teacher/Teacher.controller.js";

const teacherRoutes = Router()
teacherRoutes.get("/", TeacherController.getAllTeachers)
teacherRoutes.get("/:id", TeacherController.getTeacherById)
teacherRoutes.post("/", TeacherController.createTeacher)
teacherRoutes.delete("/:id", TeacherController.deleteTeacher)
teacherRoutes.put("/:id", TeacherController.updateTeacher)

export default teacherRoutes