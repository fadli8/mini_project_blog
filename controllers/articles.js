
let articles = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
];

// get articles
export const getArticle = (req, res) =>{
    res.send(articles);
}

// create article
export const createArticle = (req, res) =>{
    const artticle = req.body;
    articles.push(artticle)
    res.send(articles);
}


// get article by id
export const getArticleById =  (req, res) =>{
    let {id} = req.params;
    const article = articles.find((user) => user.id == id)
    res.send(article);    
}

// delete article
export const deleteArticle = (req, res) =>{
    let {id} = req.params;
    articles = articles.filter((user) => user.id != id)
    res.send(articles);   
}

// update article
export const updateArticle = (req, res) =>{

    let {id} = req.params;

    let article = articles.find((article) => article.id == id)
    const {title, body, user_id} = req.body;

    if (title) {
        article.title = title;
    }
        
    if (body) {
        article.body = body;
    }
    
    if (user_id) {
        article.user_id = user_id;
    }

    res.send(articles);
    
}