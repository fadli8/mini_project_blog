import { PrismaClient, Prisma } from '@prisma/client'




const prisma = new PrismaClient()

let articles = [
    {
        "userId": 1,
        "id": 1,
        "image": "https://picsum.photos/200/300",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "created_at": "2022-05-19",
        "updated_at": null,
        "published ": true
        },
        {
        "userId": 1,
        "id": 2,
        "image": "https://picsum.photos/200/300",
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "created_at": "2022-05-19",
        "updated_at": null,
        "published ": false
    }
];

// get articles
export const getArticle = async (req, res, next) =>{
    // res.send(articles);
    try {
       // res.json(req.headers)
        
        const articles = await prisma.post.findMany({
            include : { comment: true, user: true}
        })
        res.json(articles)
        
    } catch (error) {
        next(error)
    }
}

// create article
export const createArticle = async (req, res, next) =>{
   
    try {
        const artticle = req.body;

        const createArticle = await prisma.post.create({ data: {
            title:artticle.title,
            body: artticle.body,
            image: artticle.image,
            published: artticle.published,
            created_at: artticle.created_at,
            updated_at: "",
            authorId : 1
        } });
    
        res.json(createArticle) 
    } catch (error) {
        next(error);
    }
}


// get article by id
export const getArticleById = async (req, res, next) =>{
   try{
    let {id} = req.params;
    const article = await prisma.post.findUnique({
        where : {
            id: Number(id)
        },
        include : {
            comment: true,
            author:true
        }
    })
    
    res.json(article);
   }catch(error){
       next(error);
   }
}

// delete article
export const deleteArticle = async (req, res, next) =>{
   try {
    let {id} = req.params;
    const article = await prisma.post.delete({
        where : {
            id: Number(id)
        },
    })
    
    res.json(article);   
   } catch (error) {
       next(error);
   }
}

// update article
export const updateArticle = async (req, res, next) =>{

    let {id} = req.params;

    const {title, image, body, authorId, published} = req.body;
    let article = await prisma.post.update({
        where:{
            id: Number(id)
        },
        data:{
            title:title,
            image:image,
            body:body,
            published:published,
            updated_at: "2022-05-27",
            authorId: authorId
        }
    })

    res.json(article)
    
}
