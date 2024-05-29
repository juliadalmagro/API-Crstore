import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Orders from './Orders';
import Products from './Products';

const OrdersProducts = sequelize.define(
  'orders_products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    priceProducts: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

OrdersProducts.belongsTo(Orders, {
  as: 'orders',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_order',
    name: 'idOrder',
    allowNull: false,
    unique: true,
  },
});

OrdersProducts.belongsTo(Products, {
  as: 'products',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_product',
    name: 'idProduct',
    unique: true,
  },
});

export default OrdersProducts;
