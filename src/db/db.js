import { Sequelize } from "sequelize";

// Instanciar es const dbcon = new Sequelize
// dbcon es el objeto.
// new palabra reservada que se utiliza para instancia objetos de clase.
// Sequelize es la clase que contiene todos los metodos, ejm. authenticate. Las clases se inician con mayusculas.

const dbcon = new Sequelize("coursesdb", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});
try {
    await dbcon.authenticate()
    console.log("Conexion realizada exitosamente")
} catch (error) {
    console.log("Ha ocurrido un error", error)
}

export default dbcon