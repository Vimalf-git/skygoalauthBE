import express from 'express';
import UserCreate from '../../Controller/UserController/UserCreate.js'
import Login from '../../Controller/UserController/Login.js'
import Auth from '../../Auth/Auth.js';
const route=express();
console.log('enter into router');
route.post('/signup',UserCreate.create)
route.post('/login',Login.Login)
route.get('/getuserlist',Auth.validate,UserCreate.getUserList)
// route.put('/updateprofile',UserCreate.updateUserInfo)
// route.get('/getUser/:email',Auth.validate,UserCreate.getuser)
export default route;