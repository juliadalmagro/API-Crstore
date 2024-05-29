import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Users = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    passwordHash: {
      field: 'password_hash',
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(255),
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'customer',
    },
    cart: {
      type: DataTypes.JSONB,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    recuperation: {
      type: DataTypes.STRING(255),
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Users;
