// admin/models/nation.js
import { DataTypes } from 'sequelize';
import sequelize from '../../configs/database.js';

const Nation = sequelize.define('Nation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Corresponde al SERIAL de PostgreSQL
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: true // Cambia a false si es un campo obligatorio
  }
}, {
  tableName: 'nations', // Fuerza el nombre exacto de la tabla
  timestamps: false     // Desactiva createdAt y updatedAt si tu tabla no los tiene
});

export default Nation;