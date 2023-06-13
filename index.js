const express = require("express");
const server = express();
const port =6500

server.get('/', (req,res)=> {
    res.send('Hello Senior Gurus')
})

server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})