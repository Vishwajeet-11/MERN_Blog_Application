import User from "../models/user.model.js";

export const getAll = async(req, res) => {
    
    const users = await User.find();    
    return res.status(200).json({
        success: true,
        users,
        message: "getting requests from api"
    })
}