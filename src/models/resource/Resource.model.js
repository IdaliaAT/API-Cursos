import { DataTypes as Dt, Model } from "sequelize";
import dbcon from "../../db/db.js";

class Resource extends Model {}
Resource.init({
    resourcetype: {
        type: Dt.STRING(100),
        allowNull: false,
    },
    description: {
        type: Dt.TEXT,
    },
    url: {
        type: Dt.TEXT,
    },
    idsubject: {
        type: Dt.STRING(100),
    }
}, {
    sequelize: dbcon,
    modelName: "Resource",
    timestamps: false,
})

export default Resource