const express = require('express')
function Sum(n){
    let a=0;
    for(let i=0;i<=n;i++){
        a+=i;
    }
    return a;  
}
const app= exp();
app.get('/',function(req,res){
    let n=req.query.n;
    ans=Sum(n);
    res.send(ans.toString());

});
app.listen(3000);
