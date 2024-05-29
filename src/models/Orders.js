import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Users from './Users';
import Adresses from './Adresses';
import Payments from './Payments';
import Cupoms from './Cupoms';

const Orders = sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'criado',
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalDiscount: {
      field: 'total_discount',
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

Orders.belongsTo(Users, {
  as: 'userCostumer',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user_costumer',
    name: 'idUserCostumer',
    allowNull: false,
  },
});

Orders.belongsTo(Users, {
  as: 'userDeliver',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user_deliver',
    name: 'idUserDeliver',
  },
});

Orders.belongsTo(Adresses, {
  as: 'adresses',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_adress',
    name: 'idAdress',
  },
});

Orders.belongsTo(Payments, {
  as: 'payments',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_payment',
    name: 'idPayment',
    allowNull: false,
  },
});

Orders.belongsTo(Cupoms, {
  as: 'cupoms',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_cupom',
    name: 'idCupom',
  },
});

export default Orders;
