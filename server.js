const express = require('express');
const child_process = require('child_process');

const app = express();

app.get('/', (req, res) => {
    child_process.exec('fortune', (error, message) => {
        if (error === null) {
            const currentDateTime = new Date().toString();
            const responseMessage = 'Date and Time: ' + currentDateTime + '\nFortune:' + message;
            res.send(responseMessage);
        } else {
            res.send('Error: ' + error);
        }
    })
});

app.listen(3000, () => {
    console.log('Server started');
});
