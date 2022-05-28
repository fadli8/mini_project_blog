import express from "express";
import {createComment, getComment, deleteComment, updateComment, getCommentById} from '../controllers/comments.js'
import { accessToken } from "../controllers/users.js";

const router = express.Router();

router.get('/', accessToken, getComment);

router.post('/', accessToken, createComment);

router.get('/:id', accessToken, getCommentById);

router.delete('/:id', accessToken, deleteComment);

router.patch('/:id', accessToken, updateComment);


export default router;