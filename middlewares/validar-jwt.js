const jwt = require('jsonwebtoken');

const validarJWT = (req,res,next)  =>{
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg:'Token no encontrado'
        })
    }

    try {
        const {id} = jwt.verify(token,process.env.secretOrPrivateKey);
        req.id = id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:"No se puede procesar, token no valido"
        })
    }


}


module.exports ={
    validarJWT
}