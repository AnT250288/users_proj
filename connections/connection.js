/*
import Sequelize from 'sequelize';

export const sequelize = new Sequelize('database', 'root', 'A19.12.2007a', {
    dialect: 'mysql',
    host: "localhost",
})*/


import mongoose from "mongoose";

export const connect = mongoose.connect("mongodb://localhost:27017/Users", { useUnifiedTopology: true, useNewUrlParser: true });


/*
export const connect = mongoose
    .connect('mongodb://localhost:27017/Users',
        {userNewUrlParser: true})*/
