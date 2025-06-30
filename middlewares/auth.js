const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
    try{
const  token = req.headers.authorization;
    console.log("here token",token)
    if(!token){
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded
    next();
    }catch(err){
       return res.status(403).json({
            success: false,
            message: "Forbidden Access"
        })
    }
}

module.exports = auth