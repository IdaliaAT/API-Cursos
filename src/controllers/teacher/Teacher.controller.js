class TeacherController {
    static getAllTeachers(req, res) {
        res.status(200).send("These are all of my Teachers")
    }
    static getTeacherById(req, res) {
        const { id } = req.params
        res.status(200).send("This my route of Teacher by id")
    }
    static createTeacher(req, res) {
        res.status(201).send("You have created o registered a new Teacher")
    }
    static updateTeacher(req, res) {
        // Se trabaja con el id params en la operacion delete para agregarlo en la condicion y asi no afecte todos los registros. No olvidar el where.
        res.status(202).send("This Teacher information has been updated")
    }
    static deleteTeacher(req, res) {
        // Se trabaja con el id params en la operacion delete para agregarlo en la condicion y asi no afecte todos los registros. No olvidar el where.
        res.status(202).send("This Teacher information has been deleted")
    }
}
export default TeacherController