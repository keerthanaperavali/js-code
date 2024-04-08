const express =require('express');
const app =express();

app.use(express.json());

app.post("/api/post_example",(req,res)=>{
    const requestBody=req.body;

    console.log('Received data:',requestBody);
    res.send('data recived');
});
    
app.listen(8000);
