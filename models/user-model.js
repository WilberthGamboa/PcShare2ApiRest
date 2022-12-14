const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database/config');
const Computer = require('./computer-model');

const User = db.define('users',{
    name:{
        type:DataTypes.STRING
    },
    lastname:{
        type:DataTypes.STRING
    },

    username:{
        type:DataTypes.STRING
    },

    password:{
        type:DataTypes.STRING
    },

    email:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.NUMBER
    }
},{
  
    modelName: "users",
    //timestamps: false,


    
});



module.exports=User;