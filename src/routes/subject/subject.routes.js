import { Router } from "express";
import SubjectController from "../../controllers/subject/Subject.controller.js";

// Import Controller
// Para desestructurar se importa dentro de unas llaves, para no traernos toda la informacion de express, en este caso, por eso se puso Router entre llaves. Asi solo apunta a la informacion de Router (linea uno donde se importa solo el Router). Esto se utiliza no unicamente en import sino en otros arreglos u objetos lo llamas solamente.

const subjectRoutes = Router()
    // Con esto estamos asignando todo lo que traemos de Router a "materiaRoutes"
    // Aqui solicita dos parametros.
    // La ruta que esta arriba es la que manda, ejm linea 12.

subjectRoutes.get("/", SubjectController.getAllSubjects)
    // subjectRoutes.get("/prueba", (req, res) => {
    //     res.status(200).send("This is a test")
    // })
subjectRoutes.get("/:id", SubjectController.getSubjectById)
    // En las lineas 13, 14 y 15 se pisan las rutas por usar el mismo verbo ejm get, porque estan al mismo nivel, pero si no tiene los : el id, no se pisan . Hay que darle otro nivel a mi ruta /…. 

subjectRoutes.post("/", SubjectController.createSubject)
subjectRoutes.delete("/:id", SubjectController.deleteSubject)
subjectRoutes.put("/:id", SubjectController.updateSubject)

export default subjectRoutes