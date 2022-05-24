import express from 'express';
import bodyParser from 'body-parser';
import articlesRoutes from './routes/articles.js';
import commentsRoutes from './routes/comments.js';
import usersRoutes from './routes/users.js';
import cors from 'cors';
const app = express();
const port = "3000";
app.use(cors({
    origin: "*"
}))

app.use(bodyParser.json())

app.use('/articles', articlesRoutes);
app.use('/comments', commentsRoutes);
app.use('/users', usersRoutes);

app.get('/', (req, res)=>{
    console.log("welcome");
    res.send('welcome to the home page!');
});

app.listen(port, ()=>{ 
    console.log("hello");
});