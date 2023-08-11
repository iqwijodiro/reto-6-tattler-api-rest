const mongoose = require('mongoose');

const url = 'mongodb+srv://winderdiaz:digitalnao@tattler.gvnf45z.mongodb.net/tattler-api';

const dbConfig = async ()=> {
    return await mongoose.connect(url).then(()=>{
        console.log('DB connected');
    }).catch((error)=>{
        console.log('Error: '+ error);
    })
}

module.exports = dbConfig;