const jwt = require("jsonwebtoken");

const validate= (req, res, next)=>{
    const token= req.headers.authorization;
    if(token){
        const decodedtoken= jwt.verify(token, 'ticket');
        if(decodedtoken){
            const userId= decodedtoken.userId;
            req.body.userId= userId;
            next();
        }else{
            res.send("Please Login")
        }
    }else{
        res.send("Please Login")
    }
}

module.exports= {
    validate
}