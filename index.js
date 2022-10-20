const express = require('express'); 
const app = express(); 
const nodeCron = require('node-cron'); 


const job = nodeCron.schedule("* * * * * *", function jobYouNeedToExecute() {
    // Do whatever you want in here. Send email, Make  database backup or download data.
    console.log('scheduler @ work');
});




app.listen('3000', function () {
    console.log('server works!')
})