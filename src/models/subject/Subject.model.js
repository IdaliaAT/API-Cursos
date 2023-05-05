import { DataTypes as Dt, Model } from "sequelize"
import dbcon from "../../db/db.js"

class Subject extends Model {}
Subject.init({
    name: {
        type: Dt.STRING(100),
        allowNull: false,
    },
    description: {
        type: Dt.TEXT,
    },
}, {
    sequelize: dbcon,
    modelName: "Subject",
    timestamps: false, // Para quitar campos de cuando se creo y cuando se actualizo un registro "update and create" que se generaron cuando se crea la tabla o modelo.
})

export default Subject