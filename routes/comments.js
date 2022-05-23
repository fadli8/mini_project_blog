import express from "express";
import {createComment, getComment, deleteComment, updateComment, getCommentById} from '../controllers/comments.js'

const router = express.Router();

router.get('/', getComment);

router.post('/', createComment);

router.get('/:id', getCommentById);

router.delete('/:id', deleteComment);

router.patch('/:id', updateComment);


export default router;