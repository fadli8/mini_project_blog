import express from "express";
import {login, createUser, getUser, deleteUser, updateUser, getUserById} from '../controllers/users.js'
import { accessToken } from "../controllers/users.js";

const router = express.Router();

router.get('/', accessToken, getUser);

router.post('/login', accessToken, login);

router.post('/', accessToken, createUser);

router.get('/:id', accessToken, getUserById);

router.delete('/:id', accessToken, deleteUser);

router.patch('/:id', accessToken, updateUser);


export default router;