import JWT from "jsonwebtoken"; 

export function accessToken(req, res, next) {
 
   try{

  
    const authHeader = req.headers['authorization'];
    const token = req.authHeader && authHeader.split(' ')[1];
    res.json(token)
    if (token == null) {
        return  res.sendStatus["401"];
    }

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(error){
            return res.sendStatus('403');
        }

        res.user = user;
        next();
    })
   }catch(error){
        next(error)
   }

}