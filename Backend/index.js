const express = require('express');
const app = express();
const port =5000




// server run means request to response 
app.get('/',(req,res)=> {
    res.send('hello world')
})

app.get('/product',(req,res)=>{
    res.send('product page')
})




// addressing 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})