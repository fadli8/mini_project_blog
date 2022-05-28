import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";

import JWT from "jsonwebtoken";

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

// login

export const login = async (req, res, next) => {
    try {
        const login = req.body;
        const user = await prisma.user.findUnique({
            where:{
                email: login.email
            }
        });
    
        if(user == null){
            res.json('we are sorry you aren\'n registred');
        }

       if(await bcrypt.compare(login.password, user.password )){
           
           const accessToken = JWT.sign(user, process.env.ACCESS_TOKEN_SECRET)
           res.json({accessToken:accessToken});
       }else{
        res.send('you are not allowed');

       }
    } catch (error) {
        res.status(500).send();
    }
} 


// get users
export const getUser = async (req, res, next) =>{
    try {
        
        let users = await prisma.user.findMany({})
        res.json(users);
        
    } catch (error) {
        next(error)
    }
}

// create user
export const createUser = async (req, res, next) =>{
    try {
        const newUser = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(newUser.password, salt);
      
        const users = await prisma.user.create({
            data:{
                username: newUser.username,
                email: newUser.email,
                password: hashedPassword,
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
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        let oldUser = await prisma.user.update({
            where:{
                "id":Number(id)
            },
            data: {
                username:username,
                email:email,
                password:hashedPassword

            }
        })        
        res.json(oldUser);
    } catch (error) {
        next(error)
    }
    
}

export function accessToken(req, res, next) {
 
 
    // //    res.json(req.headers.authorization)
    //    return;
     const authHeader = req.headers.authorization;
     let token = null;
     if(req.headers.authorization){
         token = req.authHeader || authHeader.split(' ')[1];
     }
   
     if (token == null) {
         res.json("error 401")
         return;
     }
 
     JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
         if(err){
             res.json(err)
             return ;
         }
 
         res.user = user;
         next();
     })

 
 }

