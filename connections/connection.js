import Sequelize from 'sequelize';

export const sequelize = new Sequelize('database', 'root', 'A19.12.2007a', {
    dialect: 'mysql',
    host: "localhost",
})