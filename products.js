var express=require('express');
var app =express();
app.use(express.json());
const products =[{
    id:1,
    name:'iqoo',
    peice:25000
},
{
    id:2,
    name:'vivo'
    price:1600

}];
app.get('/products',(req,res0)=>{
    res.json(products);

});
app.post('/add',(req,res)=>{
    const {id,name,price}=req.body;
    console.log(id,name,price);
    res.send('data is added sucessfully');
    const newUpdate={id,name,price};
    products.push(newUpdate);
});