import express from 'express';
import UserCreate from '../../Controller/UserController/UserCreate.js'
import UtilsController from '../../Controller/Utils/UtilsController.js';
import Login from '../../Controller/UserController/Login.js'
import Auth from '../../Auth/Auth.js';
const route=express();
route.post('/signup',UserCreate.create)
route.post('/login',Login.Login)
route.get('/getuserlist',Auth.validate,UserCreate.getUserList)
route.get('/getutils/',Auth.validate,UtilsController.getdata)
export default route;