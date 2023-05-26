import Course from "./course/Course.model.js";
import Resource from "./resource/Resource.model.js";
import Role from "./role/Role.model.js";
import Subject from "./subject/Subject.model.js";
import User from "./user/User.model.js";
import SubjectCourse from "./subjectCourse/SubjectCourse.model.js";
import UserCourse from "./userCourse/UserCourse.model.js";

// Lo siguiente es la asociacion de Usuario con Role.
// User.belongsTo(Role, {
//     foreignKey: "idRole",
//     onDelete: "RESTRICT",
//     onUpdate: "CASCADE",
// })
// Role.hasMany(User, {
//     foreignKey: "idRole",
// })

// Lo siguiente es la asociacion o relacion de Subject con Resource.
Resource.belongsTo(Subject, {
    foreignKey: "idSubject",
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
})
Subject.hasMany(Resource, {
    foreignKey: "idSubject",
})

// Se pueden hacer relaciones de tablas intermedias.  Metodo BelongsToMany       Tabla Union (table debil) o Tabla Intermedia.
User.belongsToMany(Course, { through: UserCourse, foreignKey: "idUser" })
Course.belongsToMany(User, { through: UserCourse, foreignKey: "idCourse" })

Subject.belongsToMany(Course, { through: SubjectCourse, foreignKey: "idSubject" })
Course.belongsToMany(Subject, { through: SubjectCourse, foreignKey: "idCourse" })

export { Course, Resource, Role, Subject, User, SubjectCourse, UserCourse }