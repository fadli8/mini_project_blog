import express from "express";
// import articlesRoutes from './routes/articles.js';
import {createArticle, getArticle, deleteArticle, updateArticle, getArticleById} from '../controllers/articles.js'

const app = express();

// app.use('/', articlesRoutes);

const router = express.Router();

router.get('/', getArticle);

router.post('/', createArticle);

router.get('/:id', getArticleById);

router.delete('/:id', deleteArticle);

router.patch('/:id', updateArticle);


export default router;