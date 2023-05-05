import { DataTypes as Dt, Model } from "sequelize";
import dbcon from "../../db/db.js";

class User extends Model {}
User.init({
    firstName: {
        type: Dt.STRING(100),
        allowNull: false,
    },
    lastName: {
        type: Dt.STRING(100),
        allowNull: false,
    },
    email: {
        type: Dt.STRING(100),
        allowNull: false,
        unique: true,
    },
    telephone: {
        type: Dt.STRING(30),
    },
    institutionalid: {
        type: Dt.STRING(100),
    },
    password: {
        type: Dt.TEXT,
        allowNull: false,
    },
    salt: {
        type: Dt.STRING,
    },
    idRole: {
        type: Dt.INTEGER
    }

}, {
    sequelize: dbcon,
    modelName: "User",
    timestamps: false,
})

export default User