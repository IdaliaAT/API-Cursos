import { Role } from "../../models/index.js"

class RoleController {

    static async getAllRoles(req, res) {
        try {
            const roles = await Role.findAll({
                attributes: ["id", "name"]
            })
            if (!roles.length) throw { message: "There are no roles created", codeStatus: 404 }
            res.status(200).send({ success: true, message: "These are all of your defined Roles", results: roles })
        } catch (err) {
            const codeStatus = err.codeStatus || 500
            const message = err.message || "Internal Server Error"
            res.status(codeStatus).send({ sucess: false, message })
        }
    }
    static async getRoleById(req, res) {
        try {
            // este va a recibir un params.
            const { id } = req.params
            if (!id) throw { message: "There is no id", codeStatus: 400 }
            res.status(200).send({ success: true, message: "These are all of your Roles by Id" })
        } catch (err) {}
    }
    static async createRole(req, res) {
        try {
            const { name, description } = req.body
                //console.log("🚀 ~ file: Role.controller.js:18 ~ RoleController ~ createRole ~ description:", description)
                //console.log(name)
                // lo del body viene de los formularios
                // lo del params vienen de las urls y se seteo en rutas, ejm: /:id  si el parametro se llama id seria:  const { id } = req.params
                //1a. forma  const objeto = req.body     console.log(objeto.propiedad)  
                //2a. forma  const name = req.body.name
                //           const description = req.body.description
                //3a. forma  const { name, description } = req.body
                // throw = captura elerror, el throw lanza y el catch atrapa jeje
                // Los valores trusy o falsy son los que por defondo tienen un valor true or false. El valor 0 no es necesariamente falso. O el undefine defondo vale false.  El null tambien tiene un valor false.
                // Si name es false o falsy arrojame un error se representa asi:    if (!name) ... y lo demas.
                //   if(default trusy) si quiere negar  es => if(!variable (falsy))
                // el codeStatus no te captura
                // El await sirve para esperar a que haga una accion y cuando este resuelta pasa a lo siguiente.

            if (!name) throw { message: "Name is empty", codeStatus: 400 }
                // traerse los datos que nos trajimos del body osea mi destructuracion(name y description
                //  , y no se pone name: "nombre" porque mi destruturacion se llama igual a mis atributos
                // y la regla de javascript dice que si es igual name: name solo se pone name.

            const role = await Role.create({ name, description })
            if (!role) throw { message: "Internal Server error, Role is not created", codeStatus: 500 }

            res.status(201).send({ success: true, message: "Role created successfully" })

        } catch (err) {
            //console.log("🚀 ~ file: Role.controller.js:34 ~ RoleController ~ createRole ~ err:", err)
            // const codeStatus = err.codeStatus || 500 // homework
            // const message = err.message || // homework


            if (!err.codeStatus) {
                res.status(500).send({ success: false, message: err.message })
            } else {
                res.status(err.codeStatus).send({
                    success: false,
                    message: err.message,
                })
            }
        }
    }
    static async updateRole(req, res) {
        try {

            res.status(202).send("Your Role has been updated")
        } catch (err) {}
    }
    static async deleteRole(req, res) {
        try {

            res.status(202).send("Your Role has been deleted")
        } catch (err) {}
    }
}
export default RoleController