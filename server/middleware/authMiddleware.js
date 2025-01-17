import jwt from 'jsonwebtoken';
import User from '../model/User';

const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split('')[1]
    if(!token) {
        return res.status(404).json({success: false, error: "Token not Provided"})
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY)
    if(!decoded) {
        return res.status(404).json({success: false, error: "Token not Valid"})
    }

    const user = await User.findById({_id: decoded._id}).select('-password')
    if(!user) {
        return res.status(404).json({success: false, error: "User not Found"})
    }

    req.user = user
    next()
  } catch (error) {
    
  }
}

export default verifyUser

