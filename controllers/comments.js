import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();

let comments = [
    {
        "postId": 1,
        "id": 1,
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
        "postId": 1,
        "id": 2,
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        }
];

// get comments
export const getComment = async (req, res, next) =>{
    
    try {
        const comments = await prisma.comment.findMany({})
        res.json(comments);
    } catch (error) {
        next(error)
    }
}

// create comment
export const createComment = async (req, res, next) =>{
   try {
        const artticle = req.body;
        const article = await prisma.comment.create({
            data:{
                email:artticle.email,
                body:"this is new body",
                articleId:artticle.articleId
            }
        })
        res.json(artticle);
   } catch (error) {
       next(error)
   }
}


// get comment by id
export const getCommentById = async (req, res, next) =>{
   try {
    let {id} = req.params;
    const comment = await prisma.comment.findUnique({
        where:{
            "id":Number(id)
        }
    })
    res.json(comment); 
   } catch (error) {
       next(error)
   }   
}

// delete comment
export const deleteComment = async (req, res, next) =>{
   try {
        let {id} = req.params;
        const comment = await prisma.comment.delete({
            where:{
                "id":Number(id)
            }
        })
        res.json(comment);   
   } catch (error) {
       next(error)
   }
}

// update comment
export const updateComment = async (req, res, next) =>{

    try {
        let {id} = req.params;
        const {body, postId, email,} = req.body;
        let comment = await prisma.comment.update({
            where:{
                "id":Number(id)
            },
            data:{
                email:email,
                body:body
            }
        })

        res.json(comment);
    } catch (error) {
        next(error)   
    }
    
}