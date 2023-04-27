class StudentController {
    static getAllStudents(req, res) {
        res.status(200).send("These are all of my Students")
    }
    static getStudentById(req, res) {
        const { id } = req.params
        res.status(200).send("This is my route of Students by Id")
    }
    static getStudentByName(req, res) {
        const { name } = req.params
        res.status(200).send(`This is the student ${name}`)
    }

    static createStudent(req, res) {
        res.status(201).send("You have created or registered a new Student")
    }
    static updateStudent(req, res) {
        // Se trabaja con el id params en la operacion delete para agregarlo en la condicion y asi no afecte todos los registros. No olvidar el where.    
        res.status(202).send("This Student information has been updated")
    }
    static deleteStudent(req, res) {
        // Se trabaja con el id params en la operacion delete para agregarlo en la condicion y asi no afecte todos los registros. No olvidar el where.
        res.status(202).send("This Student information has been deleted")
    }
}
export default StudentController