class RoleController {

    static getAllRoles(req, res) {
        res.status(200).send("These are all of your Roles")
    }
    static getRoleById(req, res) {
        const { id } = req.params
        res.status(200).send("This is your route of Role by id")
    }
    static createRole(req, res) {
        res.status(201).send("You have created a new Role")
    }
    static updateRole(req, res) {
        res.status(202).send("Your Role has been updated")
    }
    static deleteRole(req, res) {
        res.status(202).send("Your Role has been deleted")
    }
}
export default RoleController