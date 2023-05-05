class UserController {

    static getAllUsers(req, res) {
        res.status(200).send("These are all of my Users")
    }
    static getUserById(req, res) {
        const { id } = req.params
        res.status(200).send("This is your route of User by id")
    }
    static createUser(req, res) {
        res.status(201).send("You have created a new User")
    }
    static updateUser(req, res) {
        res.status(202).send("Your User has been updated")
    }
    static deleteUser(req, res) {
        res.status(202).send("Your User has been deleted")
    }
}
export default UserController