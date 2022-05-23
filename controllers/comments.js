let comments = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        }
];

// get comments
export const getComment = (req, res) =>{
    res.send(comments);
}

// create comment
export const createComment = (req, res) =>{
    const artticle = req.body;
    comments.push(artticle)
    res.send(comments);
}


// get comment by id
export const getCommentById =  (req, res) =>{
    let {id} = req.params;
    const comment = comments.find((user) => user.id == id)
    res.send(comment);    
}

// delete comment
export const deleteComment = (req, res) =>{
    let {id} = req.params;
    comments = comments.filter((user) => user.id != id)
    res.send(comments);   
}

// update comment
export const updateComment = (req, res) =>{

    let {id} = req.params;

    let comment = comments.find((comment) => comment.id == id)
    const {name, body, postId, email} = req.body;

    if (name) {
        comment.name = name;
    }

    if (email) {
        comment.email = email;
    }
        
    if (body) {
        comment.body = body;
    }
    
    if (postId) {
        comment.postId = postId;
    }

    res.send(comments);
    
}