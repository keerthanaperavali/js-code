const express = require('express');
const app = express();
const users = [
{id: 1, username: "user1", password: "password1"},
{id: 2, username: "user2", password: "password2"}
];
const authenticate = (req, res, next) =>{
const {username, password} =req.query;
const user = users.find(
(u)=>u.username===username && u.password===password
);
if(user){
req.user = user;
next();
} else{
res.status(401).send("Unauthorized");
}
};
app.get('/profile', authenticate,(req, res)=>{
const {username} =req.user;
res.send("Welcome to your profile , ${username}!");
});
app.get('/login', (req, res)=>{
res.send("please login with your credentials.");
})
app.listen(1000); 