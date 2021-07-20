import Sequelize from 'sequelize';
import config from './config'

// config database
const sequelize = new Sequelize(
    config.db_name,
    config.db_username,
    config.db_password,
    {
      dialect: 'postgres',
    },
  );
  

/* const sequelize = new Sequelize({
  database: "dabiupufk2i5ts",
  username: "hjuxghqhjaxsty",
  password: "5fc038284c84a60876401250e639a3278651e14d06da8cb2abf3e1ebb28243dc",
  host: "ec2-52-202-152-4.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
}); */

sequelize
.authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(err => console.log(err));

export {sequelize};