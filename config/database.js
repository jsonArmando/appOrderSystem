var mongoose = require('mongoose');
var chalk = require('chalk');
var dbURL = require('./properties').DB;

//custom console
var connected =chalk.bold.cyan;
var error = chalk.bold.red;
var termination = chalk.bold.magenta;

module.exports = ()=>{
    mongoose.connect(dbURL,{useNewUrlParser:true})
    .then(()=>console.log(connected('Mongo connected! on',dbURL)))
    .catch(err =>console.log(error(`Ocurred error ${err}`)))

    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log('Mongoose is disconnected');
            process.exit(0)
        })
    })
}