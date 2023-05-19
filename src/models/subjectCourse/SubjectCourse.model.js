import { DataTypes as Dt, Model } from "sequelize"
import dbcon from "../../db/db.js"

class SubjectCourse extends Model {}

SubjectCourse.init({
    idSubject: {
        type: Dt.INTEGER,
        allowNull: false,
    },
    idCourse: {
        type: Dt.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: dbcon,
    modelName: "Subject_Course",
    timestamps: false
})

export default SubjectCourse