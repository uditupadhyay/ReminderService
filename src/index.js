const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');

const { sendBasicEmail} = require('./services/email-service');
const setupAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log('server running at ',PORT);
    });

    sendBasicEmail(
        'support@admin.com',
        'moviebookingservice@gmail.com',
        'This is a testing mail',
        'hey, how are you'
    )
}

setupAndStartServer();