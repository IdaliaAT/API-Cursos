import { DataTypes as Dt, Model } from "sequelize";
import dbcon from "../../db/db.js"

class Course extends Model {}
Course.init({
    name: {
        type: Dt.STRING(100),
        allowNull: false,
    },
    schedule: {
        type: Dt.TEXT,
    },
    initialDate: {
        type: Dt.DATEONLY,
    },
    finalDate: {
        type: Dt.DATEONLY,
    },
}, {
    sequelize: dbcon,
    modelName: "Course",
    timestamps: false,
})

export default Course