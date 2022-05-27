import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "password": "123456",
        "email": "Sincere@april.biz",
        "role": "author"
        },
        {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "password": "123456",
        "role": "author",
     
        }
];

// get users
export const getUser = async (req, res) =>{
    try {
        let users = await prisma.user.findMany({})
        res.json(users);
        
    } catch (error) {
        
    }
}

// create user
export const createUser = async (req, res, next) =>{
    try {
        const newUser = req.body;
        const users = await prisma.user.create({
            data:{
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
                role:'author'
            }
        })
        res.json(users);
    } catch (error) {
        next(error)
    }
}


// get user by id
export const getUserById = async (req, res, next) =>{
    try {
        let {id} = req.params;
        const user = await prisma.user.findUnique({
            where:{
                "id":Number(id)
            }
        })
        res.json(user); 
    } catch (error) {
        next(error)
    }   
}

// delete user
export const deleteUser = async (req, res, next) =>{
    try {
        let {id} = req.params;
        users = await prisma.user.delete({
            where:{
                "id":Number(id)
            }
        })
        res.send(users);  
    } catch (error) {
        next(error)
    } 
}


export const updateUser = async (req, res, next) =>{

    try {
        let {id} = req.params;
        const {username, password, email} = req.body;
        let oldUser = await prisma.user.update({
            where:{
                "id":Number(id)
            },
            data: {
                username:username,
                email:email,
                password:password

            }
        })        
        res.json(oldUser);
    } catch (error) {
        next(error)
    }
    
}