import { DataTypes as Dt, Model } from "sequelize";
import dbcon from "../../db/db.js";

class UserCourse extends Model {}

UserCourse.init({
    idUser: {
        type: Dt.INTEGER,
        allowNull: false,
    },
    idCourse: {
        type: Dt.INTEGER,
        allowNull: false
    }
}, {
    sequelize: dbcon,
    modelName: "User_Course",
    timestamps: false
})

export default UserCourse