/*import Sequelize from "sequelize";
import {sequelize} from "../connections/connection.js";

export const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})*/

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    login: String,
    password: String
}, {versionKey: false})

export const User = mongoose.model('Users', userSchema)