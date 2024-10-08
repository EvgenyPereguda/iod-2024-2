

const express = require('express')

const lexpresses = new Array();

for (let index = 0; index < 4; index++) {

    const app = express()
    lexpresses.push(app);    
}


for(let index in lexpresses)
{
    lexpresses[index].get('/', (req, res) => {
        res.send(`Hello World - ${index} !`)
        });
        
    const port = 3000 + index*10;
        
    lexpresses[index].listen(port, () => {
    console.log(`Example app listening
    at http://localhost:${port}`)
    })
}
