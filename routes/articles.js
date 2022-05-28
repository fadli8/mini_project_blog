import express from "express";
import {createArticle, getArticle, deleteArticle, updateArticle, getArticleById} from '../controllers/articles.js'
import {accessToken} from "../controllers/users.js";

const app = express();

// app.use('/', articlesRoutes);

const router = express.Router();

router.get('/', accessToken, getArticle);

router.post('/', accessToken, createArticle);

router.get('/:id', accessToken, getArticleById);

router.delete('/:id', accessToken, deleteArticle);

router.patch('/:id', accessToken, updateArticle);


export default router;