import express from 'express';
import {CreateUser , LoginUser,MakeAdmin} from '../applications/user'

export const userRoute = express.Router();

userRoute.route('/').post(CreateUser);

userRoute.route('/auth').post(LoginUser);

userRoute.route('/admin').post(MakeAdmin);