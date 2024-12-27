const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/freelance')
    .then(
        ()=>{
            console.log('connected to db');
            
        }
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    )