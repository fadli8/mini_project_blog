let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "password": "123456",
        "email": "Sincere@april.biz",
        "phone": "06 00 00 00 00",
        "website": "hildegard.org"
        },
        {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "password": "123456",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
     
        }
];

// get users
export const getUser = (req, res) =>{
    res.send(users);
}

// create user
export const createUser = (req, res) =>{
    const newUser = req.body;
    users.push(newUser)
    res.send(users);
}


// get user by id
export const getUserById =  (req, res) =>{
    let {id} = req.params;
    const user = users.find((user) => user.id == id)
    res.send(user);    
}

// delete user
export const deleteUser = (req, res) =>{
    let {id} = req.params;
    users = users.filter((user) => user.id != id)
    res.send(users);   
}


export const updateUser = (req, res) =>{

    let {id} = req.params;

    let oldUser = users.find((user) => user.id == id)
    const {name, username, password, email, phone, website} = req.body;

    if (name) {
        oldUser.name = name;
    }

    if (username) {
        oldUser.username = username;
    }

    if (email) {
        oldUser.email = email;
    }
        
    if (password) {
        oldUser.password = password;
    }
    
    if (phone) {
        oldUser.phone = phone;
    }

    if (website) {
        oldUser.website = website;
    }

    res.send(users);
    
}