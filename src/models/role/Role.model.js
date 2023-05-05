import { DataTypes as Dt, Model } from "sequelize";
import dbcon from "../../db/db.js";

class Role extends Model {}
Role.init({
    name: {
        type: Dt.STRING(100),
        allowNull: false,
    },
    description: {
        type: Dt.STRING,
    },
}, {
    sequelize: dbcon,
    modelName: "Role",
    timestamps: false,
})

export default Role