import { Subject } from "../../models/index.js"
// Hay 2 metodos de clase:  instancia y clase.
// SubjectController es el metodo de clase en este caso.
class SubjectController {

    static getAllSubjects(req, res) {
        res.status(200).send("These are all of my subjects")
    }
    static getSubjectById(req, res) {
        const { id } = req.params
        res.status(200).send("This is my route of Subject by id")
    }
    static createSubject(req, res) {
        res.status(201).send("You have created a new Subject")
    }
    static updateSubject(req, res) {
        // Se trabaja con el id params en la operacion delete para agregarlo en la condicion y asi no afecte todos los registros. No olvidar el where.
        res.status(202).send("This Subject has been updated")
    }
    static deleteSubject(req, res) {
        // Se trabaja con el id params en la operacion delete para agregarlo en la condicion y asi no afecte todos los registros. No olvidar el where.
        res.status(202).send("Your Subject has been deleted")
    }
}
export default SubjectController