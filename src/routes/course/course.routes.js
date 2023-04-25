import { Router } from "express";
import CourseController from "../../controllers/course/Course.controller.js";

const courseRoutes = Router()
courseRoutes.get("/", CourseController.getAllCourses)
courseRoutes.get("/:id", CourseController.getCourseById)
courseRoutes.post("/", CourseController.createCourse)
courseRoutes.delete("/:id", CourseController.deleteCourse)
courseRoutes.put("/:id", CourseController.updateCourse)

export default courseRoutes