import { Subject } from "../../models/index.js"
// Hay 2 metodos de clase:  instancia y clase.
// SubjectController es el metodo de clase en este caso.
class SubjectController {

    static async getAllSubjects(req, res) {
        try {
            const subjects = await Subject.findAll({
                attributes: ["id", "name"]
            })

            console.log("Este es mi console.log", Boolean(!subjects.length))
            console.log(subjects.length)

            if (!subjects.length) throw { message: "There are no Subjects", codeStatus: 404 }
                // Esta parte siempre va a entrar. if(!subjects.length)
            res.status(200).send({ success: true, message: "These are all of your Subjects", results: subjects })
        } catch (err) {
            const codeStatus = err.codeStatus || 500
            const message = err.message || "Internal Server Error"
            res.status(codeStatus).send({ success: false, message })
        }
    }
    static getSubjectById(req, res) {
        const { id } = req.params
        res.status(200).send("This is my route of Subject by id")
    }
    static async createSubject(req, res) {
        try {
            const { name, description } = req.body
            if (!name) throw { message: "Name cannot be empty", codeStatus: 400 }

            const subject = await Subject.create({ name, description })
            if (!subject) throw { message: "There is an unexpected error, subject is not created", codeStatus: 500 }

            res.status(201).send({ success: true, message: "Your Subject has been created successfully" })

        } catch (err) {
            const codeStatus = err.codeStatus || 500
            const message = err.message || "Internal server error"
                //   if (!err.codeStatus) {
                //       res.status(500).send({ success: false, message: err.message })
                //  } else {
            res.status(codeStatus).send({ success: false, message })
                //  }
                //  res.status(err.codeStatus).send({ success: false, message: err.message })
                //  Convencion
        }
    }

    /* Explicacion del "Bloque try - catch"   linea 14 en adelante.
            Se declara el objeto del body ejm. name y description.
            Linea 15    Con lo que empezamos es con desestructurar, en este caso name y description.
            Linea 16 Si la informacion que alimenta el cliente no trae nada, esta vacio, en este caso el name, arroja un mensaje con un codeStatus 400 que dice que ese input no debe estar vacio. No permite null, tiene que llevar algo.
            Y en caso de que si trae informacion, manda un mensaje exitoso de que ha sido creado.
            Linea 19 En caso de que exista un error diferente por ejemplo de problema del servidor.
            linea 20 Si no es el error codeStatus que yo lance entonces manda res.status 500.
          Como 
                // { name, description}              Homework
            // vamos a requerir */

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