import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Categories from './Categories';

const Products = sequelize.define(
  'products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(20000),
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

Products.belongsTo(Categories, {
  as: 'categories',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_category',
    name: 'idCategory',
    allowNull: false,
  },
});

export default Products;
