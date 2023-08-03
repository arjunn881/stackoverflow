import jwt from 'jsonwebtoken'

export const auth = (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]

        let decodeData = jwt.verify(token, 'test')

        req.userId = decodeData?.id

        next()
    } catch (error) {
        res.status(505).json({messsage : error});
    }
}