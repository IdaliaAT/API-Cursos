class ResourceController {

    static getAllResources(req, res) {
        res.status(200).send("These are all of your resources")
    }
    static getResourceById(req, res) {
        const { id } = req.params
        res.status(200).send("This is your route of Resource by id")
    }
    static createResource(req, res) {
        res.status(201).send("You have created a new resource")
    }
    static updateResource(req, res) {
        res.status(202).send("Your Resource has been updated")
    }
    static deleteResource(req, res) {
        res.status(202).send("Your Resource has been deleted")
    }
}
export default ResourceController