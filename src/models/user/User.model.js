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
    password: {
        type: Dt.TEXT,
        allowNull: false,
    },
    salt: {
        type: Dt.STRING,
    }
}, {
    sequelize: dbcon,
    modelName: "User",
    timestamps: false,
})

export default User