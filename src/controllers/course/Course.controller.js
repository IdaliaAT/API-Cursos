import { Course } from "../../models/index.js"

class CourseController {

    static getAllCourses(req, res) {
        res.status(200).send("These are all of your Courses")
    }
    static getCourseById(req, res) {
        const { id } = req.params
        res.status(200).send("This is your route of Course by id")
    }
    static async createCourse(req, res) {
        try {
            const { name, schedule, initialDate, finalDate } = req.body

            if (!name) throw { message: "Name cannot be empty", codeStatus: 400 }
            const course = await Course.create({ name, schedule, initialDate, finalDate })

            if (!course) throw { message: "Something went wrong, your new course is not created", codeStatus: 500 }
            res.status(201).send({ success: true, message: "Your new Course has been created successfully" })

        } catch (err) {
            const codeStatus = err.codeStatus || 500
            const message = err.message || "Internal server error"
            res.status(codeStatus).send({ success: false, message })
        }
    }

    static updateCourse(req, res) {
        // Se trabaja con el id params en la operacion actualizar u update, para agregarlo en la condicion y asi no afecte todos los registros.	No olvidar del where.
        res.status(202).send("Your Course has been updated")
    }
    static deleteCourse(req, res) {
        // Se trabaja con el id params en la operacion delete para agregarlo en la condicion y asi no afecte todos los registros. No olvidar del where.
        res.status(202).send("Your Course has been deleted")
    }
}
export default CourseController