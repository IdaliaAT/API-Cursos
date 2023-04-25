class CourseController {
    static getAllCourses(req, res) {
        res.status(200).send("These are all of my Courses")
    }
    static getCourseById(req, res) {
        const { id } = req.params
        res.status(200).send("This is my route of Course by id")
    }
    static createCourse(req, res) {
        res.status(201).send("You have created a new Course")
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