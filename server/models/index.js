import users from './users';
import Sequelize from 'sequelize';
import {sequelize} from '../../config/config-db';

const models = {
    Users: users(sequelize,Sequelize),

}

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export default models;